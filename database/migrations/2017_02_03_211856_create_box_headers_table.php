<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoxHeadersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('box_headers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hi_id')->unsigned();
            $table->foreign('hi_id')->references('id')->on('headers')->onDelete('cascade');
            $table->integer('seq', false);
            $table->enum('orientation', ['left', 'right']);
            $table->string('desc')->nullable();
            $table->string('icon')->nullable();
            $table->string('link')->nullable();
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
        Schema::dropIfExists('box_headers');
    }
}
