import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { nombre, email, rubro, mensaje } = await request.json()

    // Validate required fields
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Nombre, email y mensaje son requeridos" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Create SQL client
    const sql = neon(process.env.DATABASE_URL!)

    // Insert into database
    const result = await sql`
      INSERT INTO consultas (nombre, email, rubro, mensaje)
      VALUES (${nombre}, ${email}, ${rubro || null}, ${mensaje})
      RETURNING id, created_at
    `

    try {
      await resend.emails.send({
        from: "OpusWebs <onboarding@resend.dev>", // Change this to your verified domain
        to: ["tu-email@ejemplo.com"], // Replace with your actual email
        subject: `Nueva consulta de ${nombre}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #0ea5e9; margin-bottom: 20px;">Nueva Consulta Recibida</h2>
            
            <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
              <p style="margin: 0 0 8px 0;"><strong style="color: #334155;">Nombre:</strong></p>
              <p style="margin: 0 0 15px 0; color: #475569;">${nombre}</p>
              
              <p style="margin: 0 0 8px 0;"><strong style="color: #334155;">Email:</strong></p>
              <p style="margin: 0 0 15px 0; color: #475569;">${email}</p>
              
              ${
                rubro
                  ? `
                <p style="margin: 0 0 8px 0;"><strong style="color: #334155;">Rubro:</strong></p>
                <p style="margin: 0 0 15px 0; color: #475569;">${rubro}</p>
              `
                  : ""
              }
              
              <p style="margin: 0 0 8px 0;"><strong style="color: #334155;">Mensaje:</strong></p>
              <p style="margin: 0; color: #475569; white-space: pre-wrap;">${mensaje}</p>
            </div>
            
            <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
              Recibido el ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}
            </p>
          </div>
        `,
      })
    } catch (emailError) {
      // Log email error but don't fail the request since data was saved
      console.error("Error sending email notification:", emailError)
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consulta enviada correctamente, te contactaremos a la brevedad",
        data: result[0],
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error saving consulta:", error)
    return NextResponse.json({ error: "Error al guardar la consulta. Por favor, intenta nuevamente." }, { status: 500 })
  }
}
