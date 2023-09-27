<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $footerLinks = [
        [
            "text" => $_POST["link1_text"],
            "url" => $_POST["link1_url"]
        ],
        // Repetir para outros links do rodapé
    ];

    // Atualize os links do rodapé no frontend
    $footerLinks = $footerLinks;

    // Redirecione de volta para o painel
    header("Location: panel.html");
    exit;
}
?>
