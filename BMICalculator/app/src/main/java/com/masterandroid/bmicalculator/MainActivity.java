package com.masterandroid.bmicalculator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    String msg = "Android: ";
    public EditText name;
    public EditText weight;
    public EditText height;
    public TextView result;
    public TextView outcome;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        name = findViewById(R.id.name);
        weight = findViewById(R.id.weight);
        height = findViewById(R.id.height);
        result = findViewById(R.id.result);
        outcome = findViewById(R.id.outcome);


        Button exit = findViewById(R.id.exit);
        exit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        Button reset =  findViewById(R.id.reset);
        reset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                name.setText("");
                weight.setText("");
                height.setText("");
                result.setText("");
                outcome.setText("");
            }
        });
        Button calc = findViewById(R.id.calc);
        calc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                double a = Double.parseDouble(weight.getText().toString());
                double b = Double.parseDouble(height.getText().toString());
                double c = (b * b);
                double answer = a / c;
                result.setText("YOUR BMI IS : " + String.valueOf(answer));

                if (answer > 30)
                {
                    outcome.setText("YOU ARE OBESE");
                }
                else if ( answer > 25)
                {
                    outcome.setText("YOU ARE OVERWEIGHT");
                }
                else if ( answer >18)
                {
                    outcome.setText("YOU ARE HEALTHY");
                }
                else
                {
                    outcome.setText("YOU ARE UNDERWEIGHT");
                }


            }
        });

    }
    @Override
    protected void onStart() {
        super.onStart();
        Log.d(msg, "The onStart() event");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d(msg, "The onResume() event");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d(msg, "The onPause() event");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(msg, "The onDestroy() event");
    }
}




