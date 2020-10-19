(function (Prism) {
	Prism.languages.timeline = {
		'timepoint': {
			pattern: /(^\s*)(?:\.\d+|(?:0|[1-9]\d*)(?:\.\d*)?)(?=\s|$)/m,
			alias: 'number',
			lookbehind: true
		},
	}
}(Prism))
