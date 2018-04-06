package com.brst.barter.utility;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

import android.support.v7.app.AlertDialog;
import android.webkit.GeolocationPermissions;

import com.brst.barter.R;


/**
 * Created by brst-pc89 on 12/28/17.
 */

public class MyUtility {

    ProgressDialog progressDialog;

    static MyUtility instance;


   public static MyUtility getInstance()
    {
        if (instance==null)
        {
            instance=new MyUtility();
        }
        return instance;
    }


    //check network connectivity--------------------------------
    public boolean  isNetworkAvailable(Context context)
    {
        ConnectivityManager ConnectionManager=(ConnectivityManager)context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo=ConnectionManager.getActiveNetworkInfo();
        if(networkInfo != null && networkInfo.isConnected()==true )
        {
          return true;
        }
        else
        {
           return false;
        }
    }


    // show progress dialog untill web view show data---------------
    public  void showProgressDialog(Context context)
    {
        progressDialog = ProgressDialog.show(context, "", "");
        progressDialog.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
        progressDialog.setContentView(R.layout.progress_dialog);
        CircleProgressBar circleProgressBar = progressDialog.findViewById(R.id.progressWheel);
        circleProgressBar.setColorSchemeResources(R.color.toolbar, R.color.colorOrange, R.color.black, R.color.colorDarkSky);
    }


    //hide progress dialog-----------------------------------------
    public void hideProgressDialog()
    {
        if (progressDialog!=null && progressDialog.isShowing())
        {
            progressDialog.hide();
        }
    }


    //show alert dialog if network not available-------------------
    public void showAlertDialog(final Context context)
    {
        new AlertDialog.Builder(context)
                .setMessage(context.getResources().getString(R.string.network_msg))

                .setPositiveButton(context.getResources().getString(R.string.ok_text), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {


                    }

                }).show();
    }


    //show access location dialog--------------------------------------
    public void showLocationAlertDialog(final Context context,final String origin, final GeolocationPermissions.Callback callback)

    {
        new AlertDialog.Builder(context)
                .setMessage(context.getResources().getString(R.string.alert_message))
                .setNegativeButton(context.getResources().getString(R.string.block), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {


                        callback.invoke(origin, false, true);

                    }
                }).setPositiveButton(context.getResources().getString(R.string.allow), new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {

                callback.invoke(origin, true, false);

            }
        }).show();



    }

}
