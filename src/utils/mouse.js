var mouse = {
    _scrollFunc(e) {
        console.log(e)
        e = e || window.event;
        // 判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta) {
            //当滑轮向上滚动时
            if (e.wheelDelta > 0) {
                alert('上滚')
            }
            //当滑轮向下滚动时
            if (e.wheelDelta < 0) {
                alert('下滚')
            }
            //Firefox滑轮事件
        } else if (e.detail) {
            //当滑轮向下滚动时
            if (e.detail > 0) {
                alert('下滚')
            }
            //当滑轮向上滚动时
            if (e.detail < 0) {
                alert('上滚')
            }
        }
    }
}
 // onWheel={(e)=>Mouse._scrollFunc(e)}
export default mouse;