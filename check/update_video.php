<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["video"])) {
    $videoDir = "videos/";
    $videoFile = $videoDir . basename($_FILES["video"]["name"]);

    if (move_uploaded_file($_FILES["video"]["tmp_name"], $videoFile)) {
        // Atualize o caminho do vídeo no frontend
        $videoSrc = $videoFile;
        // Redirecione de volta para o painel
        header("Location: panel.html");
        exit;
    } else {
        echo "Erro ao fazer upload do vídeo.";
    }
}
?>
