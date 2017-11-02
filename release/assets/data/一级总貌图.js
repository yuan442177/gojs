{ "class": "go.GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"category":"Zone", "text":"炼油\n一部\n吸收", "label":"区域", "key":-25, "loc":"-330 130"},
{"category":"Zone", "text":"炼油\n一部\n再生", "label":"区域", "key":-2, "loc":"-330 250"},
{"category":"Zone", "text":"炼油\n四部\n吸收", "label":"区域", "key":-3, "loc":"-220 130"},
{"category":"Zone", "text":"炼油\n二部\n吸收", "label":"区域", "key":-4, "loc":"-220 250"},
{"category":"Zone", "text":"炼油\n四部\n再生", "label":"区域", "key":-5, "loc":"-110 130"},
{"category":"Zone", "text":"炼油\n二部\n再生", "label":"区域", "key":-6, "loc":"-110 250"},
{"category":"Legend1", "text":"一级总貌图", "label":"图例", "key":-45, "loc":"10 200"}
 ],
  "linkDataArray": [ 
{"category":"FUYE", "label":"富液", "points":[-330,160.5,-330,170.5,-330,190,-330,190,-330,209.5,-330,219.5], "from":-25, "to":-2, "fromPort":"B", "toPort":"T"},
{"category":"PINYE", "label":"贫液", "points":[-330,280.5,-330,290.5,-363,290.5,-363,210.25,-363,130,-353,130], "from":-2, "to":-25, "fromPort":"B", "toPort":"L"},
{"category":"FUYE", "label":"富液", "points":[-330,160.5,-330,170.5,-330,192.16841194265382,-164.0317251834016,192.16841194265382,-164.0317251834016,237,-143,237,-133,237], "from":-25, "to":-6, "toPort":"TLS", "fromPort":"B"},
{"category":"FUYE", "label":"富液", "points":[-197,237,-187,237,-165,237,-165,237,-143,237,-133,237], "from":-4, "to":-6, "fromPort":"TRS", "toPort":"TLS"},
{"category":"PINYE", "label":"贫液", "points":[-133,263,-143,263,-165,263,-165,263,-187,263,-197,263], "from":-6, "to":-4, "fromPort":"BLS", "toPort":"BRS"},
{"category":"PINYE", "label":"贫液", "points":[-133,263,-143,263,-162.3181073987585,263,-162.3181073987585,305.5534000451714,-375.65644323803605,305.5534000451714,-375.65644323803605,130,-363,130,-353,130], "from":-6, "to":-25, "fromPort":"BLS", "toPort":"L"},
{"category":"FUYE", "label":"富液", "points":[-197,117,-187,117,-165,117,-165,117,-143,117,-133,117], "from":-3, "to":-5, "fromPort":"TRS", "toPort":"TLS"},
{"category":"PINYE", "label":"贫液", "points":[-133,143,-143,143,-165,143,-165,143,-187,143,-197,143], "from":-5, "to":-3, "fromPort":"BLS", "toPort":"BRS"}
 ]}