let obj = JSON.parse($response.body);
obj["subscriber"]["subscriptions"]= {
      "revenuecat.pro.yearly": {
        "is_sandbox": false,
        "period_type": "active",
        "billing_issues_detected_at": null,
        "unsubscribe_detected_at": null,
        "expires_date": "2100-01-01T01:01:01Z",
        "original_purchase_date": "2020-01-01T01:01:01Z",
        "purchase_date": "2020-01-01T01:01:01Z",
        "store": "app_store"
      }
    };
obj["subscriber"]["entitlements"]= {
      "pro": {
        "expires_date": "2100-01-01T01:01:01Z",
        "product_identifier": "revenuecat.pro.yearly",
        "purchase_date": "2020-01-01T01:01:01Z"
      }
    };
$done({body: JSON.stringify(obj)});
