<?php
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');

    $servidor = "localhost";
    $usuario  = "root";
    $password = "";
    $bd       = "turismo_valencia";

    $mysqli = new mysqli($servidor, $usuario, $password, $bd);

    if ($mysqli->connect_error) {
        http_response_code(500);
        echo json_encode(["error" => "Conexión fallida: " . $mysqli->connect_error]);
        die();
    }

    if (isset($_GET['action'])) {
        switch ($_GET['action']) {
            case 'getActividades':
                getActividades();
                break;
            case 'getActividad':
                getActividad();
                break;
            case 'getCategorias':
                getCategorias();
                break;
            case 'getUbicaciones':
                getUbicaciones();
                break;
            case 'getReservas':
                getReservas();
                break;
            case 'getUsuarios':
                getUsuarios();
                break;
            case 'getActividadesByCategoria':
                getActividadesByCategoria();
                break;
            default:
                http_response_code(400);
                echo json_encode(["error" => "Acción no reconocida"]);
                break;
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "No se ha especificado ninguna acción"]);
    }

    // Devuelve todas las actividades con su categoría y ubicación
    function getActividades() {
        global $mysqli;
        $resultado = $mysqli->query("
            SELECT a.ID, a.Titulo, a.Descripcion, a.Precio, a.Duracion, a.Plazas_disponibles,
                   c.Nombre AS Categoria,
                   u.Nombre_lugar AS Ubicacion, u.Ciudad
            FROM Actividad a
            LEFT JOIN Categoria c  ON a.ID_Categoria = c.ID
            LEFT JOIN Ubicacion u  ON a.ID_Ubicacion  = u.ID
        ");
        $actividades = [];
        if ($resultado->num_rows > 0) {
            foreach ($resultado as $fila) {
                $actividades[] = $fila;
            }
        }
        echo json_encode($actividades);
    }

    // Devuelve una actividad por ID (?action=getActividad&id=1)
    function getActividad() {
        global $mysqli;
        if (!isset($_GET['id'])) {
            http_response_code(400);
            echo json_encode(["error" => "Falta el parámetro id"]);
            return;
        }
        $id = intval($_GET['id']);
        $stmt = $mysqli->prepare("
            SELECT a.ID, a.Titulo, a.Descripcion, a.Precio, a.Duracion, a.Plazas_disponibles,
                   c.Nombre AS Categoria,
                   u.Nombre_lugar AS Ubicacion, u.Direccion, u.Ciudad
            FROM Actividad a
            LEFT JOIN Categoria c ON a.ID_Categoria = c.ID
            LEFT JOIN Ubicacion u ON a.ID_Ubicacion  = u.ID
            WHERE a.ID = ?
        ");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $resultado = $stmt->get_result();
        if ($resultado->num_rows > 0) {
            echo json_encode($resultado->fetch_assoc());
        } else {
            http_response_code(404);
            echo json_encode(["error" => "Actividad no encontrada"]);
        }
    }

    // Devuelve todas las categorías
    function getCategorias() {
        global $mysqli;
        $resultado = $mysqli->query("SELECT * FROM Categoria");
        $categorias = [];
        if ($resultado->num_rows > 0) {
            foreach ($resultado as $fila) {
                $categorias[] = $fila;
            }
        }
        echo json_encode($categorias);
    }

    // Devuelve todas las ubicaciones
    function getUbicaciones() {
        global $mysqli;
        $resultado = $mysqli->query("SELECT * FROM Ubicacion");
        $ubicaciones = [];
        if ($resultado->num_rows > 0) {
            foreach ($resultado as $fila) {
                $ubicaciones[] = $fila;
            }
        }
        echo json_encode($ubicaciones);
    }

    // Devuelve todas las reservas con usuario y actividad
    function getReservas() {
        global $mysqli;
        $resultado = $mysqli->query("
            SELECT r.ID, r.Fecha_reserva, r.Cantidad, r.Estado, r.Email,
                   u.Nombre AS Usuario,
                   a.Titulo AS Actividad, a.Precio
            FROM Reserva r
            LEFT JOIN Usuario   u ON r.ID_Usuario   = u.ID
            LEFT JOIN Actividad a ON r.ID_Actividad = a.ID
        ");
        $reservas = [];
        if ($resultado->num_rows > 0) {
            foreach ($resultado as $fila) {
                $reservas[] = $fila;
            }
        }
        echo json_encode($reservas);
    }

    // Devuelve actividades filtradas por nombre de categoría 
    function getActividadesByCategoria() {
        global $mysqli;
        if (!isset($_GET['categoria'])) {
            http_response_code(400);
            echo json_encode(["error" => "Falta el parámetro categoria"]);
            return;
        }
        $categoria = $_GET['categoria'];
        $stmt = $mysqli->prepare("
            SELECT a.ID, a.Titulo, a.Descripcion, a.Precio, a.Duracion, a.Plazas_disponibles,
                   c.Nombre AS Categoria,
                   u.Nombre_lugar AS Ubicacion, u.Ciudad
            FROM Actividad a
            LEFT JOIN Categoria c ON a.ID_Categoria = c.ID
            LEFT JOIN Ubicacion u ON a.ID_Ubicacion  = u.ID
            WHERE c.Nombre = ?
        ");
        $stmt->bind_param("s", $categoria);
        $stmt->execute();
        $resultado = $stmt->get_result();
        $actividades = [];
        foreach ($resultado as $fila) {
            $actividades[] = $fila;
        }
        echo json_encode($actividades);
    }

    // Devuelve todos los usuarios
    function getUsuarios() {
        global $mysqli;
        $resultado = $mysqli->query("SELECT ID, Nombre, Rol, Fecha_registro FROM Usuario");
        $usuarios = [];
        if ($resultado->num_rows > 0) {
            foreach ($resultado as $fila) {
                $usuarios[] = $fila;
            }
        }
        echo json_encode($usuarios);
    }
?>
