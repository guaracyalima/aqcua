<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MailRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'seg_id'        =>  'required|exists:segments,id',
            'name'      =>  'required|max:90',
            'email'     =>  'required|email',
            'phone'     =>  'required|min:8|max:17',
            'title'     =>  'required|min:3|max:90',
            'msg'       =>  'required|min:3|max:500'
        ];
    }
    
    public function messages()
    {
        return [
            'id.required'       => 'Operação invalida!',
            'id.exists'         => 'Operação invalida!',
            'name.required'     => 'O compo de Nome é obrigatorio!',
            'email.required'    => 'O compo de E-mail é obrigatorio!',
            'phone.required'    => 'O compo de Telefone é obrigatorio!',
            'title.required'    => 'O compo de Assunto é obrigatorio!',
            'msg.required'      => 'O compo de Mensagem é obrigatorio!'
        ];
    }
}
