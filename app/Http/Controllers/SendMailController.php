<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\MailRequest;
use Mail;

use Modules\Admin\Entities\Segments;
use App\SendMail;

class SendMailController extends Controller
{
    public function sendContact( MailRequest $request)
    {
        $mail   =   SendMail::where('seg_id', $request->seg_id)
                    ->where('category', 'SITE')
                    ->first();
        
        // VAR BODY EMAIL
        $title = $request->title;
        $body = ["subject" => $mail->desc, "title" => $mail->title];

        // SEND EMAIL
        $email = Mail::send('contact', ['request' => $request,'title' => $title, 'mail' => $mail ], function ($msg) use ( $request, $body, $mail )  {
            $msg->from(env('MAIL_USERNAME'), $body['title']);
            $msg->to( $mail->email, $request->name )->subject( $body['subject'] );
        });

        //RETURN SEND
        if( $email == 1){
            // RESPONSE
            return response()->json( 'Solicitação de redefinição de senha enviada com sucesso! Verifique seu e-mail');
        }else{
            return response()->json( 'Erro ao enviar. Tente novamente mais tarde!', 500 ); 
        }
        /*
         * 
         */
    }
    
    public function sendBudget($id, Request $request )
    {
        
    }
}
