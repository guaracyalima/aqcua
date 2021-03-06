<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class IconMedTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dw = Carbon::now()->toDateTimeString();
        
        DB::table('icons')->insert([
            ['icon' => 'gi-me gi-me-pills', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-blood-sample-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pills-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-4', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-6', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-dental-floss', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-lungs', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-x-ray', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-scalpel', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-spinal-column', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-eye', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-periodontal-scaler', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-finger', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-vagina-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-8', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-otoscope', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-crutches', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-implants-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-lozenge', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-syringe', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-nose', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-ear', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-braces-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-gum', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-6', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-eye-drops', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-drugs-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-dental-drill', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-penis', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-9', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-crown', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pills-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-ointment-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-canine-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tweezers', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-extraction', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-ribbon', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tooth', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pill-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-fit', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-intestines', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-drugs-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-liver', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-gum-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-breast-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-scissors', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-medical-records', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-brain-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-braces', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-kidney', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tonsils-tester', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-records-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-kneecap', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-skull-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-ointment', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-x-ray-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pills-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-vagina', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-implants', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-premolar-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-records-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-drugs-4', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-caries', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-virus', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-breast-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tooth-brush', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-knee', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-medicine', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tooth-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-skeleton', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-bacteria', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-x-ray-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-breast-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-first-aid-kit', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-10', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-syringe-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-5', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-epidermis', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-bone', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-articulation', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-blood-transfusion', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-brain-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-implants-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-breast-4', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-femur', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-finger-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-records', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-optical', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-band-aid', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-cardiogram-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-lungs-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-arm-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-brain-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-implants-4', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-notepad', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-eye-drops-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-lungs-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-arm', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-thermometer-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pills-4', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tooth-pliers', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-mirror', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-microbe', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-heart', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-medicine-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-stomach', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-fat', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-thin', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-7', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-blood-sample', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-finger-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-earbuds', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-hammer', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tablets', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-anesthesia', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-electric-toothbrush', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-thermometer', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tweezers-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-perfusion', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-breast', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-canine', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pancreas', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-edema', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-premolar-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-cardiogram', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-brain', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-4', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-knee-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-periodontal-scaler-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-canine-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-braces-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-inhalator', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-caries-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-syringe-4', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-kidney-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tooth-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-drugs', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-uterus', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-premolar', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-cardiogram-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-drugs-3', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-implants-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-syringe-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-7', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-breast-implant', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-canine-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-stomach-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-antibiotic', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-molar-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-periodontal-scaler-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pill', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-iris', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-plastered-foot', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-dna', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-8', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-dropper', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-stethoscope', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-plastered-foot-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-eye-1', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-skull', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-syringe-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-wheelchair', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-teeth-5', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-hospital', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-lungs2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-injury', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-surgeon', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-syringe2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-medicine-2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-tooth2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-medicine2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-first-aid-kit2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-transfusion', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-nurse', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-band-aid2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-heart2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-medicine-12', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-thermometer2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-medical-history', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-ambulance', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-pill2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-dna2', 'created_at' => $dw, 'updated_at' =>  $dw ],
            ['icon' => 'gi-me gi-me-wheelchair2', 'created_at' => $dw, 'updated_at' =>  $dw ]
        ]);
    }
}
