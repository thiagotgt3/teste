<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Enviar Notificação para WhatsApp</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['phone']) && isset($_POST['message'])) {
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $url = "https://api.whatsapp.com/send?phone=$phone&text=" . urlencode($message);
        header("Location: $url");
        exit;
    }
}
?>

<form method="post" action="">
    <label for="phone">Número de Telefone:</label>
    <input type="text" id="phone" name="phone" placeholder="Informe o número com código do país" value="+5527981573256" required>
    <br>
    <label for="message">Mensagem:</label>
    <input type="text" id="message" name="message" placeholder="Digite a mensagem" value="veja aqui" required>
    <br>
    <button type="submit" style="padding: 10px;">
        <img src="icone_whatsapp.png" alt="Enviar">
    </button>
</form>

</body>
</html>
