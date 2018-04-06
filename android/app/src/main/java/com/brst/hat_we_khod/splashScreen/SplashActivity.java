package com.brst.hat_we_khod.splashScreen;

import android.Manifest;
import android.content.Intent;
import android.os.Build;
import android.os.Handler;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.brst.hat_we_khod.R;

import com.brst.hat_we_khod.mainScreen.MainActivity;
import com.brst.hat_we_khod.utility.AbsRuntimeMarshmallowPermission;

public class SplashActivity extends AbsRuntimeMarshmallowPermission {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {

            requestAppPermissions(new String[]{android.Manifest.permission.INTERNET, android.Manifest.permission.READ_EXTERNAL_STORAGE, android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.ACCESS_COARSE_LOCATION,Manifest.permission.ACCESS_FINE_LOCATION}, R.string.message, ALL_PERMISSIONS);
        } else {

            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {

                    Intent intent=new Intent(SplashActivity.this,MainActivity.class);
                    startActivity(intent);
                    finish();

                }
            }, 2000);

        }

    }

    @Override
    public void onPermissionGranted(int requestCode) {

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {

                Intent intent=new Intent(SplashActivity.this,MainActivity.class);
                startActivity(intent);
                finish();

            }
        }, 2000);
    }
}
