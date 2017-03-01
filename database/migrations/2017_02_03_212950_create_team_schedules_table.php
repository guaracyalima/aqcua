<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('has_id')->unsigned();
            $table->foreign('has_id')->references('id')->on('teams_has_health')->onDelete('cascade');
            $table->string('week');
            $table->string('schedule');
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
        Schema::dropIfExists('team_schedules');
    }
}
