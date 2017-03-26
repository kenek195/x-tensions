var $fields = document.querySelectorAll(".comment__container-redesign .js-comment-new-reply-field");
var $comments = document.getElementsByClassName('comment__container-redesign');

for (var i = 0; i < $comments.length; i++) {
	(function(index){
		$fields[index].onfocus = function () {
			user = document.querySelectorAll(".comment__container-redesign .comment__item .t-link")[index].text;
			pos = 6 + user.length;
			if (!this.value) {
				this.value = "Hi " + user
					+ ",\n\n\n\n"
					+ '<a href="mailto:candy@thimpress.com?subject=' + user + ' - Eduma Support"><img alt="Email Me" src="http://res.cloudinary.com/kenek195/image/upload/v1480999069/themeforest/tf-email.png"></a>'
					+ "\n"
					+ '<a href="https://thimpress.com/forums/forum/eduma/" rel="nofollow"><img alt="Forum" src="http://res.cloudinary.com/kenek195/image/upload/v1480998918/themeforest/tf-forum.png"></a>'
					+ "\n"
					+ '<a href="https://themeforest.net/user/thimpress/follow"><img alt="Follow" src="http://res.cloudinary.com/kenek195/image/upload/v1480999002/themeforest/tf-follow.png"></a>'
					+ "\n"
					+ '<a href="https://www.facebook.com/thimpress/" rel="nofollow"><img alt="Like" src="http://res.cloudinary.com/kenek195/image/upload/v1480998918/themeforest/tf-like.png"></a>';
				setCaretToPos(this, pos);
				this.style.height = '292px';
			}
		}

	})(i);

}
function setSelectionRange(input, selectionStart, selectionEnd) {
	if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(selectionStart, selectionEnd);
	} else if (input.createTextRange) {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	}
}

function setCaretToPos(input, pos) {
	setSelectionRange(input, pos, pos);
}
