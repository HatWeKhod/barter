//
//  ViewController.swift
//  FbWebApp
//
//  Created by brst on 10/10/17.
//  Copyright © 2017 brst. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UIWebViewDelegate {
    
    @IBOutlet weak var mainView: UIView!
    @IBOutlet weak var webView: UIWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        webView.backgroundColor = UIColor.white
        
        webView.delegate = self
        let url = URL(string: "http://hatwekhod.cfapps.io")
        let request = URLRequest(url: url!)
        //webView.scalesPageToFit = true
        webView?.loadRequest(request)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    //MARK:- Web View Delegates
    func webViewDidStartLoad(_ webView: UIWebView) {
        
        let status = Reach().connectionStatus()
        switch status
        {
        case .unknown, .offline:
            print("Not connected")
            let alert = UIAlertController(title: "", message: "No Network Connection Found.", preferredStyle: UIAlertControllerStyle.alert)
            alert.addAction(UIAlertAction(title: "Ok", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        case .online(.wwan) , .online(.wiFi):
            print("Connected via WWAN")
            print("Connected via WiFi")

            
            SVProgressHUD.show(withStatus: "Loading")
            webView.isUserInteractionEnabled = false
        }
    }
    
    func webView(_ webView: UIWebView, didFailLoadWithError error: Error) {
        DispatchQueue.global(qos: .default).async(execute: {() -> Void in
            // time-consuming task
            DispatchQueue.main.async(execute: {() -> Void in
                SVProgressHUD.dismiss()
                webView.isUserInteractionEnabled = true
            })
        })
    }
    
    func webViewDidFinishLoad(_ webView: UIWebView) {
        //if(!webView.isLoading) {
        
        DispatchQueue.global(qos: .default).async(execute: {() -> Void in
            // time-consuming task
            DispatchQueue.main.async(execute: {() -> Void in
                SVProgressHUD.dismiss()
                webView.isUserInteractionEnabled = true
            })
        })
        //}
    }
}
