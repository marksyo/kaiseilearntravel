document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

        //プラグイン読み込み
        defaultView: 'dayGridMonth',
        //カレンダーを月ごとに表示
        editable: true,
        //イベント編集
        firstDay: 1,
        //秋の始まりを設定。1→月曜日。defaultは0(日曜日)
        eventDurationEditable: false,
        //イベントの期間変更
        selectLongPressDelay: 0,
        // スマホでタップしたとき即反応
        // events: [
        //     {
        //         title: 'イベント',
        //         start: '2019-01-01'
        //     }
        // ],
        //一旦イベントのサンプルを表示。動作確認用。

        events: "/setEvents",
        // eventObjectsを取得するJSONフィードのURLを指定


        eventDrop: function (info) {
            //eventをドラッグしたときの処理
            //editEventDate(info);
            //あとで使う関数
        },

        dateClick: function (info) {
            //日付をクリックしたときの処理
            //addEvent(calendar,info);
            //あとで使う関数
        },
    });
    calendar.render();
});

function isAnOverlapEvent(events, eventToCheck) {
    // Properties
    const resourceID = eventToCheck.resourceId;
    // Moment.js objects
    const startMoment = eventToCheck.start;
    const endMoment = eventToCheck.end;

    try {
        if (moment.isMoment(startMoment) && moment.isMoment(endMoment)) {
            // Filter Events by a specific resource
            const eventsByResource = events.filter(event => event.resourceId === resourceID);
            for (let i = 0; i < eventsByResource.length; i++) {
                const eventA = eventsByResource[i];
                if (moment.isMoment(eventA.start) && moment.isMoment(eventA.end)) {
                    // start-time in between any of the events
                    if (moment(startMoment).isAfter(eventA.start) && moment(startMoment).isBefore(eventA.end)) {
                        console.log("start-time in between any of the events")
                        return true;
                    }
                    //end-time in between any of the events
                    if (moment(endMoment).isAfter(eventA.start) && moment(endMoment).isBefore(eventA.end)) {
                        console.log("end-time in between any of the events")
                        return true;
                    }
                    //any of the events in between/on the start-time and end-time
                    if (moment(startMoment).isSameOrBefore(eventA.start) && moment(endMoment).isSameOrAfter(eventA.end)) {
                        console.log("any of the events in between/on the start-time and end-time")
                        return true;
                    }
                } else {
                    const error = 'Error, Any event on array of events is not valid. start or end are not Moment objects';
                    console.error(error);
                    throw new Error(error);
                }
            }
            return false;
        } else {
            const error = 'Error, start or end are not Moment objects';
            console.error(error);
            throw new Error(error);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}