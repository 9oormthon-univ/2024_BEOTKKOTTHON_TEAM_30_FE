#import "CoreHapticsModule.h"
#import <CoreHaptics/CoreHaptics.h>

@implementation CoreHapticsModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(triggerCustomHapticWithPattern:(NSDictionary *)patternDict) {
    if (@available(iOS 13.0, *)) {  //13.0부터 지원
        
        // 햅틱 패턴 및 엔진 초기화
        CHHapticEngine *engine = [[CHHapticEngine alloc] init];
        
        // 패턴 생성
        NSArray *events = patternDict[@"events"];
        NSMutableArray *hapticEvents = [NSMutableArray array];
        for (NSDictionary *eventDict in events) {
            CHHapticEvent *event = [[CHHapticEvent alloc] initWithEventType:CHHapticEventTypeTransient parameters:@{} relativeTime:[eventDict[@"relativeTime"] doubleValue]];
            [hapticEvents addObject:event];
        }
        CHHapticPattern *pattern = [[CHHapticPattern alloc] initWithEvents:hapticEvents parameters:@{} error:nil];
        
        // 햅틱 실행
        [engine playPattern:pattern atTime:0 completionHandler:nil];
    } else {
        NSLog(@"Core Haptics is not supported on this device.");
    }
}

@end