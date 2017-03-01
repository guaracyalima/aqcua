<?php


function convertBaseImg( $base ){
   $data_uri = trim($base);
   $data_pieces = explode(",", $data_uri);
   $encoded_image = $data_pieces[1];
   $decoded_image = base64_decode($encoded_image);
   return $decoded_image;
}
function getBaseExtension( $decoded_image ){
   $f = finfo_open();
   $mime_type = finfo_buffer($f, $decoded_image, FILEINFO_MIME_TYPE);//FILEINFO_MIME_TYPE);
   return $extension = explode("/", $mime_type )[1];
}

function cropImg( $src, $sec ){
    
    $quality = 90;
    $img  = imagecreatefromjpeg($src);
    $dest = ImageCreateTrueColor( $sec[4], $sec[5]);

    imagecopyresampled($dest, $img, $sec[0], $sec[1], $sec[2],
        $sec[3], $sec[4], $sec[5], $sec[4], $sec[5] );
    
    return imagejpeg($dest, $src, $quality);

    //header('Content-type: image/jpeg');
    //return imagejpeg($dst_r,null,$jpeg_quality);
 

}