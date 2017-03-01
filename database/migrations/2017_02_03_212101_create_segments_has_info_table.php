<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSegmentsHasInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('segments_has_info', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('seg_id')->unsigned();
            $table->foreign('seg_id')->references('id')->on('segments')->onDelete('cascade');
            $table->integer('info_id')->unsigned();
            $table->foreign('info_id')->references('id')->on('info')->onDelete('cascade');
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
        Schema::dropIfExists('segments_has_info');
    }
}
