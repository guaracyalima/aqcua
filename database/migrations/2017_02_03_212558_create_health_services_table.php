<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHealthServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_services', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hs_id')->unsigned();
            $table->foreign('hs_id')->references('id')->on('health_specialties')->onDelete('cascade');
            $table->string('name', 130);
            $table->string('img')->nullable();
            $table->text('desc')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('health_services');
    }
}
