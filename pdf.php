$referer = $_SERVER['HTTP_REFERER'] ?? '';
$allowed_domain = 'yourwebsite.com';

if (strpos($referer, $allowed_domain) === false) {
    header('HTTP/1.0 403 Forbidden');
    die('Direct access not allowed.');
}

