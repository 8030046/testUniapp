<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="input" message="成功消息" :duration="2000" :before-close="true" @close="close"
				@confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<view class="text-area">
			<button @click="open">打开弹窗</button>
			<button @tap="click">日历插入事件</button>
			<button @tap="click02">ios闪光灯</button>
			<button @tap="click03">监听飞行模式</button>
		</view>
	</view>
</template>
<script>
	var calanderURL = "content://com.android.calendar/calendars";
	var calanderEventURL = "content://com.android.calendar/events";
	var calanderRemiderURL = "content://com.android.calendar/reminders";
	var calId;
	export default {
		methods: {
			/**
			 * 点击取消按钮触发
			 * @param {Object} done
			 */
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			/**
			 * 点击确认按钮触发
			 * @param {Object} done
			 * @param {Object} value
			 */
			confirm(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			click() {
				uni.getSystemInfo({
					success: res => {
						if (res.platform === 'android') {
							this.addEvent()
						}
					}
				})
			},
			open() {
				// 通过组件定义的ref调用uni-popup方法
				this.$refs.popup.open()
			},
			click02() {
				let isOn = true
				if (plus.os.name == "iOS") {
					var avcaptClass = plus.ios.importClass("AVCaptureDevice");
					if (avcaptClass) {
						var device = avcaptClass.defaultDeviceWithMediaType("vide");
						plus.ios.invoke(device, "lockForConfiguration:", null);
						if (isOn) {
							plus.ios.invoke(device, "setTorchMode:", 1);
							plus.ios.invoke(device, "setFlashMode:", 1);
						} else {
							plus.ios.invoke(device, "setTorchMode:", 0);
							plus.ios.invoke(device, "setFlashMode:", 0);
						}
						plus.ios.invoke(device, "unlockForConfiguration");
					}
				}
			},
			click03() {
				const plugins = uni.requireNativePlugin('CRGG-Plugin');
				plugins.setcalendar({
					title: '我是提醒',
					location: "上海市普陀区",
					allDay: "1",
					description: "测试测试描述",
					startDate: "2020-04-15 15:40:33",
					endDate: "2020-04-15 15:40:32",
					alarmArray_ios: ["-7.f", "-17.f", "-27.5f"],
					alarmArray_android: [1, 2, 10],

				}, result => {
					if (result.type == "0") {
						console.log('result', result);
						//失败 message
					} else {
						console.log('result', result);
						//成功
					}
				});
			},
			addEvent() {
				var Cursor = plus.android.importClass("android.database.Cursor");
				var Uri = plus.android.importClass("android.net.Uri");
				var Calendar = plus.android.importClass("java.util.Calendar");
				var main = plus.android.runtimeMainActivity();
				var userCursor = plus.android.invoke(main.getContentResolver(), "query", Uri.parse(calanderURL), null,
					null, null, null);
				//判断是否有账户
				if (plus.android.invoke(userCursor, "getCount") <= 0) {
					this.initCalendars();
				} else {
					plus.android.invoke(userCursor, "moveToLast");
					calId = plus.android.invoke(userCursor, "getString", plus.android.invoke(userCursor, "getColumnIndex",
						"_id"));
					var ContentValues = plus.android.importClass("android.content.ContentValues");
					var events = new ContentValues();
					events.put("title", "标题");
					events.put("description", "内容");
					// 插入账户  
					events.put("calendar_id", calId);
					console.log(calId);
					//位置
					events.put("eventLocation", "位置");
					events.put("dtstart", "提醒开始时间"); //时间戳 
					events.put("dtend", "提醒结束时间"); //时间戳 
					events.put("hasAlarm", 1);
					events.put("eventTimezone", "Asia/Shanghai"); // 这个是时区，必须有，  
					// 添加事件    
					var newEvent = plus.android.invoke(plus.android.runtimeMainActivity().getContentResolver(), "insert",
						Uri.parse(calanderEventURL), events);
					// 事件提醒的设定  
					var id = plus.android.invoke(newEvent, "getLastPathSegment");
					var values = new ContentValues();
					values.put("event_id", id);
					// 提前30分钟有提醒  
					values.put("minutes", "30");
					values.put("method", "1");
					plus.android.invoke(main.getContentResolver(), "insert", Uri.parse(calanderRemiderURL), values);
				}
			},
			//添加账户          
			initCalendars() {
				var TimeZone = plus.android.importClass("java.util.TimeZone");
				console.log(TimeZone)
				var timeZone = TimeZone.getDefault();
				console.log(timeZone)
				var ContentValues = plus.android.importClass("android.content.ContentValues");
				console.log(ContentValues)
				var value = new ContentValues();
				var Calendars = plus.android.importClass("android.provider.CalendarContract.Calendars");
				console.log(Calendars)
				value.put("name", "名称");
				// 账户名称
				value.put("account_name", "账户名称");
				// 账户类型
				value.put("account_type", "com.android.exchange");
				// 显示的账户名称
				value.put("calendar_displayName", "显示的账户名称");
				value.put("visible", 1);
				value.put("calendar_color", -9206951);
				value.put("calendar_access_level", "700");
				value.put("sync_events", 1);
				value.put("calendar_timezone", plus.android.invoke(timeZone, "getID"));
				// 账户拥有者
				value.put("ownerAccount", "账户拥有者");
				value.put("canOrganizerRespond", 0);
				console.log(value)
				var Uri = plus.android.importClass("android.net.Uri");
				var calendarUri = Uri.parse("content://com.android.calendar/calendars");
				var buildUpon = plus.android.invoke(calendarUri, "buildUpon");
				var CalendarContract = plus.android.importClass("android.provider.CalendarContract");
				plus.android.invoke(buildUpon, "appendQueryParameter", CalendarContract.CALLER_IS_SYNCADAPTER, "true");
				plus.android.invoke(buildUpon, "appendQueryParameter", "account_name", "账户名称");
				plus.android.invoke(buildUpon, "appendQueryParameter", "account_type", "com.android.exchange");
				calendarUri = plus.android.invoke(buildUpon, "build");
				plus.android.invoke(plus.android.runtimeMainActivity().getContentResolver(), "insert", calendarUri, value);

			}

		}
	}
</script>
