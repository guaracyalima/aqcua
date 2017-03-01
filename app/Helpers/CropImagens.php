<?php

namespace App\Helpers;

// WideImage
use App\Helpers\WideImage\WideImage;

class CropImagens{
    
    public function tratamento($dir, $x, $y, $w, $h, $largura, $altura, $tmp_name, $path, $extensao){

        $img = WideImage::load($tmp_name);

        $img = $img->resize($largura);

        $img = $img->crop($x,$y,$w,$h);
        $img = $img->resize($largura,$altura,'fill');

        if ($extensao == 'png') {
        	$img->saveToFile($dir.$path);
        } else {
            if ($largura <= 250) {
                $img->saveToFile($dir.$path, 90);
            } else {
                $img->saveToFile($dir.$path, 70);
            }
        	
        }
	}

    public function imagem_maior($dir, $x, $y, $w, $h, $largura, $altura, $tmp_name, $path, $extensao){

        $img = WideImage::load($tmp_name);

        $img = $img->resize($largura);

        $img = $img->crop($x,$y,$w,$h);
        $img = $img->resize($largura,$altura,'fill');

        if ($extensao == 'png') {
            $img->saveToFile($dir.$path);
        } else {
            if ($largura <= 250) {
                $img->saveToFile($dir.$path, 90);
            } else {
                $img->saveToFile($dir.$path, 70);
            }
            
        }

    }
}