package com.easy.probability;

import android.os.Bundle;
import org.apache.cordova.*;


public class Probability extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.setStringProperty("loadingDialog", "Starting 123EasyProbability");
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")
    }
}