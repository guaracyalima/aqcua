<!DOCTYPE html>
<html style="height: 100%; outline:0; box-sizing: border-box;">
    <body style="position: relative; height-min: 600px ;height: 100%;  background: rgba(0,0,0,.3); font-family: 'Roboto', sans-serif; font-weight: 300; font-size: 17px; color:#777;">
        <div style="position: absolute;left:0; right:0;top: 50px;margin: auto; width: 600px; border-radius: 4px; background: #fff; overflow: hidden;">
            <div style="padding: 20px 15px;text-align:center;position: relative;">
                <div style="font-size: 26px; text-align: center;">{{ $mail->title }}</div>
                <div style="font-size: 16px; margin-top:15px; text-align: center;">{{$mail->desc}}</div>
                <table class="table" style="width: 80%; display: block;margin: 0 auto; position: relative; margin-top: 20px;"> 
                    <tbody> 
                        <tr> 
                            <th scope="row" style="background-color: #f9f9f9; width: 150px; padding: 10px; font-size: 12px;">Nome:</th> 
                            <td style="padding: 10px;">{{ $request->name }}</td>
                        </tr> 
                        <tr> 
                            <th scope="row" style="background-color: #f9f9f9; width: 150px; padding: 10px; font-size: 12px;">E-mail:</th> 
                            <td style="padding: 10px;">{{ $request->email }}</td>
                        </tr> 
                        <tr> 
                            <th scope="row" style="background-color: #f9f9f9; width: 150px; padding: 10px; font-size: 12px;">Telefone:</th> 
                            <td style="padding: 10px;">{{ $request->phone }}</td>
                        </tr> 
                        @if (isset($request->whatsapp) )
                        <tr> 
                            <th scope="row" style="background-color: #f9f9f9; width: 150px; padding: 10px; font-size: 12px;">Whatsapp:</th> 
                            <td style="padding: 10px;">{{ $request->whatsapp }}</td>
                        </tr> 
                        @endif
                        <tr> 
                            <th scope="row" style="background-color: #f9f9f9; width: 150px; padding: 10px; font-size: 12px;">Assunto:</th> 
                            <td style="padding: 10px;">{{ $request->title }}</td>
                        </tr>
                        <tr> 
                            <th scope="row" style="background-color: #f9f9f9; width: 150px; padding: 10px; font-size: 12px;">Mensagem:</th> 
                            <td style="padding: 10px;">{{ $request->msg }}</td>
                        </tr>
                    </tbody> 
                </table>
                <div style="background: #FFF none repeat scroll 0% 0%; text-align: center; padding: 5px 0px; margin-top: 20px; color:#61a3e5; font-size: 12px;">
                    <i style="font-size: 10px; text-align: center;">E-mail via website da {{ $mail->title }}.</i>
                </div>
                <div style="background: #FFF none repeat scroll 0% 0%; text-align: center; padding: 10px 0px; color:#DD4B44; font-size: 12px;">
                    <i style="font-size: 12px; text-align: center;">Não responda esse e-mail.</i>
                </div>
                </div>
            </div>
            </div>
        </div>
    </body>
</html>