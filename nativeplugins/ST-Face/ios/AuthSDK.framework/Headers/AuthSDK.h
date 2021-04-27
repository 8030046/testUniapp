//
//  AuthSDK.h
//  AuthSDK
//
//  Created by jardgechen on 16/8/31.
//  Copyright © 2016年 tencent. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ValidatorTool.h"
extern NSString *const OcrOnlyNotification;
typedef void(^HttpRequestSuccessBlock)(id responseObject);
typedef void(^HttpRequestFailBlock)(NSError *error);

@protocol AuthSDKDelegate <NSObject>

/**
 回调函数

 @param result 返回的结果
 */
-(void)onResultBack:(NSDictionary *)result;

@end

@interface AuthSDK : NSObject


/**
 初始化服务器URL

 @return 构造函数
 */
-(instancetype)init;

- (void) setServerURL:(NSString *)serverURL;

- (void) setLimitErrorTime:(int)limiErrorTime;


-(NSString *)getSDKVersion;


/**
 开始流程
 @param token 需要传入的token, 不需要时可传入nil
 @param vc 父controller
 @param delegate 需要实现回调的Controller
 */
-(void)startAuthWithToken:(NSString *)token parent:(UIViewController *)vc delegate:(id<AuthSDKDelegate>)delegate;


@end

