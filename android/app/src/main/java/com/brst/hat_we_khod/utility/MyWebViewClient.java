package com.brst.hat_we_khod.utility;

import android.content.Context;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.brst.hat_we_khod.utility.MyUtility;

public class MyWebViewClient extends WebViewClient {

    Context context;

    public MyWebViewClient(Context context) {

        this.context = context;
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {

        view.loadUrl(url);


        return true;
    }

    @Override
    public void onPageFinished(WebView view, String url) {

        if (MyUtility.getInstance().progressDialog.isShowing()) {
            MyUtility.getInstance().hideProgressDialog();
        }

    }
}