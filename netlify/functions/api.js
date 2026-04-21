import mysql from 'mysql2/promise';

const dbConfig = {
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};

function ok(data) {
  return { statusCode: 200, headers, body: JSON.stringify(data) };
}
function err(code, msg) {
  return { statusCode: code, headers, body: JSON.stringify({ error: msg }) };
}

export const handler = async (event) => {
  const params = event.queryStringParameters || {};
  const action = params.action;

  if (!action) return err(400, 'No se ha especificado ninguna acción');

  let con;
  try {
    con = await mysql.createConnection(dbConfig);

    switch (action) {

      case 'getActividades': {
        const [rows] = await con.execute(`
          SELECT a.ID, a.Titulo, a.Descripcion, a.Precio, a.Duracion, a.Plazas_disponibles,
                 c.Nombre AS Categoria,
                 u.Nombre_lugar AS Ubicacion, u.Ciudad
          FROM Actividad a
          LEFT JOIN Categoria c ON a.ID_Categoria = c.ID
          LEFT JOIN Ubicacion u ON a.ID_Ubicacion  = u.ID
        `);
        return ok(rows);
      }

      case 'getActividad': {
        if (!params.id) return err(400, 'Falta el parámetro id');
        const [rows] = await con.execute(`
          SELECT a.ID, a.Titulo, a.Descripcion, a.Precio, a.Duracion, a.Plazas_disponibles,
                 c.Nombre AS Categoria,
                 u.Nombre_lugar AS Ubicacion, u.Direccion, u.Ciudad
          FROM Actividad a
          LEFT JOIN Categoria c ON a.ID_Categoria = c.ID
          LEFT JOIN Ubicacion u ON a.ID_Ubicacion  = u.ID
          WHERE a.ID = ?
        `, [parseInt(params.id)]);
        if (rows.length === 0) return err(404, 'Actividad no encontrada');
        return ok(rows[0]);
      }

      case 'getCategorias': {
        const [rows] = await con.execute('SELECT * FROM Categoria');
        return ok(rows);
      }

      case 'getUbicaciones': {
        const [rows] = await con.execute('SELECT * FROM Ubicacion');
        return ok(rows);
      }

      case 'getReservas': {
        const [rows] = await con.execute(`
          SELECT r.ID, r.Fecha_reserva, r.Cantidad, r.Estado, r.Email,
                 u.Nombre AS Usuario,
                 a.Titulo AS Actividad, a.Precio
          FROM Reserva r
          LEFT JOIN Usuario   u ON r.ID_Usuario   = u.ID
          LEFT JOIN Actividad a ON r.ID_Actividad = a.ID
        `);
        return ok(rows);
      }

      case 'getUsuarios': {
        const [rows] = await con.execute(
          'SELECT ID, Nombre, Rol, Fecha_registro FROM Usuario'
        );
        return ok(rows);
      }

      case 'getActividadesByCategoria': {
        if (!params.categoria) return err(400, 'Falta el parámetro categoria');
        const [rows] = await con.execute(`
          SELECT a.ID, a.Titulo, a.Descripcion, a.Precio, a.Duracion, a.Plazas_disponibles,
                 c.Nombre AS Categoria,
                 u.Nombre_lugar AS Ubicacion, u.Ciudad
          FROM Actividad a
          LEFT JOIN Categoria c ON a.ID_Categoria = c.ID
          LEFT JOIN Ubicacion u ON a.ID_Ubicacion  = u.ID
          WHERE c.Nombre = ?
        `, [params.categoria]);
        return ok(rows);
      }

      default:
        return err(400, 'Acción no reconocida');
    }
  } catch (e) {
    return err(500, 'Error de conexión: ' + e.message);
  } finally {
    if (con) await con.end();
  }
};
