// 重复字符串
function repeat(s, count) {
	return new Array(count + 1).join(s);
}

// 格式化json字符串
function formatJson(source) {

	var json = source;

	var i = 0,
		len = 0,
		tab = "    ",
		targetJson = "",
		indentLevel = 0,
		inString = false,
		currentChar = null;

	for(i = 0, len = json.length; i < len; i += 1) {
		currentChar = json.charAt(i);

		switch(currentChar) {
			case '{':
			case '[':
				if(!inString) {
					targetJson += currentChar + "\n" + repeat(tab, indentLevel + 1);
					indentLevel += 1;
				} else {
					targetJson += currentChar;
				}
				break;
			case '}':
			case ']':
				if(!inString) {
					indentLevel -= 1;
					targetJson += "\n" + repeat(tab, indentLevel) + currentChar;
				} else {
					targetJson += currentChar;
				}
				break;
			case ',':
				if(!inString) {
					targetJson += ",\n" + repeat(tab, indentLevel);
				} else {
					targetJson += currentChar;
				}
				break;
			case ':':
				if(!inString) {
					targetJson += ": ";
				} else {
					targetJson += currentChar;
				}
				break;
			case ' ':
			case "\n":
			case "\t":
				if(inString) {
					targetJson += currentChar;
				}
				break;
			case '"':
				if(i > 0 && json.charAt(i - 1) !== '\\') {
					inString = !inString;
				}
				targetJson += currentChar;
				break;
			default:
				targetJson += currentChar;
				break;
		}
	}
	return targetJson;
}

// textarea自动增高
function autoTextAreaHeight(elem) {
	elem.style.height = 'auto';
    elem.scrollTop = 0;
    elem.style.height = elem.scrollHeight + 'px';
}
