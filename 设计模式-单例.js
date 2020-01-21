var DragDrop = function () {
  var dragging = null;

  function handleEvent(event) {
    // 获取事件和目标
    event = EventUtil.getEvent(event);
    // 确定事件类型
    switch (event.type) {
      case "mousedown":
        if (EventTarget.className.indexOf("draggable") > -1) {
          dragging = target;
        }
        break;
      case "mousemove":
        if (dragging !== null) {
          // 指定位置
          // 为了元素能被拖放，它必须是绝对定位的
          dragging.style.left = event.clientX + 'px';
          dragging.style.top = event.clientY + 'px';
        }
        break;
      case "mouseup":
        dragging = null;
        break;
    }
  };

  return {
    enable: function () {
      EventUtil.addHandler(document, "mousedown", handleEvent);
      EventUtil.addHandler(document, "mousemove", handleEvent);
      EventUtil.addHandler(document, "mouseup", handleEvent);
    },
    disable: function () {
      EventUtil.removeHandle(document, "mousedown", handleEvent);
      EventUtil.removeHandle(document, "mousedown", handleEvent);
      EventUtil.removeHandle(document, "mousedown", handleEvent);
    }
  }
}
