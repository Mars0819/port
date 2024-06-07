<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $title = $_POST["title"];
    $message = $_POST["message"];
    
    // Ganti alamat email penerima di bawah ini
    $to = "youremail@example.com";
    
    $email_body = "Judul: $subject\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Judul: $title\n";
    $email_body .= "Pesan:\n$message";
    
    // Kirim email
    if (mail($to, $subject, $email_body)) {
        echo "Email berhasil terkirim!";
    } else {
        echo "Gagal mengirim email. Mohon coba lagi.";
    }
} else {
    // Jika akses bukan dari metode POST, redirect ke halaman formulir kontak
    header("Location: contact_form.html");
}
?>
