<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["images"])) {
    $imageDir = "images/carousel/";
    $uploadedImages = [];

    foreach ($_FILES["images"]["tmp_name"] as $key => $tmpName) {
        $imageFile = $imageDir . basename($_FILES["images"]["name"][$key]);
        if (move_uploaded_file($tmpName, $imageFile)) {
            $uploadedImages[] = $imageFile;
        }
    }

    // Atualize as imagens do carrossel no frontend
    $carouselImages = $uploadedImages;

    // Redirecione de volta para o painel
    header("Location: panel.html");
    exit;
}
?>
