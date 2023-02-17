export const Events = [
    {
        "name": "attach",
        "descrition": "Triggered in an object when the object attaches or detaches from agent.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Attach",
        "param": []
    },
    {
        "name": "at_rot_target",
        "descrition": "Result of llRotTarget library function call\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/At_rot_target",
        "param": [
            {
                "name": "handle",
                "description": "llRotTarget return",
                "type": "integer"
            },
            {
                "name": "targetrot",
                "description": "llRotTarget rot parameter",
                "type": "rotation"
            },
            {
                "name": "ourrot",
                "description": "current rotation (similar to llGetRot)",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "at_target",
        "descrition": "Result of llTarget library function call\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/At_target",
        "param": [
            {
                "name": "tnum",
                "description": "llTarget return",
                "type": "integer"
            },
            {
                "name": "targetpos",
                "description": "llTarget position parameter",
                "type": "vector"
            },
            {
                "name": "ourpos",
                "description": "current position (similar to llGetPos)",
                "type": "vector"
            }
        ]
    },
    {
        "name": "changed",
        "descrition": "Various changes to the object/prim trigger this event.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Changed",
        "param": []
    },
    {
        "name": "collision",
        "descrition": "Triggered while task is colliding with another task.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Collision",
        "param": []
    },
    {
        "name": "collision_end",
        "descrition": "Triggered when task stops colliding with another task\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Collision_end",
        "param": []
    },
    {
        "name": "collision_start",
        "descrition": "Triggered when task starts colliding with another task\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Collision_start",
        "param": []
    },
    {
        "name": "control",
        "descrition": "Result of llTakeControls library function call and user input.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Control",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID",
                "type": "key"
            },
            {
                "name": "level",
                "description": "bitfield of CONTROL_* flags, non-zero while one or more keys is being held down.",
                "type": "integer"
            },
            {
                "name": "edge",
                "description": "bitfield of CONTROL_* flags, non-zero when one or more keys have been just pressed or released.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "dataserver",
        "descrition": "Triggered when task receives asynchronous data\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Dataserver",
        "param": [
            {
                "name": "queryid",
                "description": "matches the return of the requesting function",
                "type": "key"
            },
            {
                "name": "data",
                "description": "the requested data (cast as a string as necessary).",
                "type": "string"
            }
        ]
    },
    {
        "name": "email",
        "descrition": "Triggered as a result of calling llGetNextEmail where there is a matching email in the email queue.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Email",
        "param": [
            {
                "name": "time",
                "description": "In the (string)llGetUnixTime format",
                "type": "string"
            },
            {
                "name": "address",
                "description": "",
                "type": "string"
            },
            {
                "name": "subject",
                "description": "",
                "type": "string"
            },
            {
                "name": "message",
                "description": "",
                "type": "string"
            },
            {
                "name": "num_left",
                "description": "The number of emails remaining in the email queue.[1]",
                "type": "integer"
            }
        ]
    },
    {
        "name": "experience_permissions",
        "descrition": "The agent has approved an experience permissions request.  This may be through interaction with the experience permission dialog or the experience profile, or automatically if the agent has previously approved the experience.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Experience_permissions",
        "param": []
    },
    {
        "name": "experience_permissions_denied",
        "descrition": "The agent has denied experience permission.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Experience_permissions_denied",
        "param": [
            {
                "name": "agent_id",
                "description": "avatar  UUID that denied permission.",
                "type": "key"
            },
            {
                "name": "reason",
                "description": "Reason for denial; one of the Experience Tools XP_ERROR_* errors flags.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "http_request",
        "descrition": "Triggered when task receives an HTTP request.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Http_request",
        "param": [
            {
                "name": "request_id",
                "description": "HTTP request id for response use, and function response identification.",
                "type": "key"
            },
            {
                "name": "method",
                "description": "\"GET\", \"POST\", \"PUT\", \"DELETE\", URL_REQUEST_GRANTED, URL_REQUEST_DENIED",
                "type": "string"
            },
            {
                "name": "body",
                "description": "Contents of the request.",
                "type": "string"
            }
        ]
    },
    {
        "name": "http_response",
        "descrition": "Triggered when task receives a response to one of its llHTTPRequests\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Http_response",
        "param": [
            {
                "name": "request_id",
                "description": "Matches return from llHTTPRequest",
                "type": "key"
            },
            {
                "name": "status",
                "description": "HTTP status code (like 404 or 200)",
                "type": "integer"
            },
            {
                "name": "metadata",
                "description": "List of HTTP_* constants and attributes",
                "type": "list"
            },
            {
                "name": "body",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "land_collision",
        "descrition": "Triggered in the root when physical object or attached avatar is colliding with land\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Land_collision",
        "param": []
    },
    {
        "name": "land_collision_end",
        "descrition": "Triggered in the root when a physical object or attached avatar stops colliding with land\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Land_collision_end",
        "param": []
    },
    {
        "name": "land_collision_start",
        "descrition": "Triggered in the root when a physical object or attached avatar starts colliding with land\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Land_collision_start",
        "param": []
    },
    {
        "name": "linkset_data",
        "descrition": "The linkset_data event fires in all scripts in a linkset whenever the datastore has been modified through a call to one of the llLinksetData functions.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Linkset_data",
        "param": [
            {
                "name": "action",
                "description": "Action taken on the linkset Datastore",
                "type": "integer"
            },
            {
                "name": "name",
                "description": "The key of the name:value pair.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The new value of the pair. Empty string if pair was deleted.",
                "type": "string"
            }
        ]
    },
    {
        "name": "link_message",
        "descrition": "Triggered when the script receives a link message that was sent by a call to llMessageLinked. llMessageLinked is used to send messages from one script to another.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Link_message",
        "param": [
            {
                "name": "sender_num",
                "description": "The link number of the prim that contained the script that called llMessageLinked.",
                "type": "integer"
            },
            {
                "name": "num",
                "description": "Second parameter of the llMessageLinked call.",
                "type": "integer"
            },
            {
                "name": "str",
                "description": "The message that was sent from the script that called llMessageLinked.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "Fourth parameter of the llMessageLinked call.",
                "type": "key"
            }
        ]
    },
    {
        "name": "listen",
        "descrition": "Triggered by chat, use llListen to enable and filter\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Listen",
        "param": [
            {
                "name": "channel",
                "description": "channel that the message appeared on.",
                "type": "integer"
            },
            {
                "name": "name",
                "description": "prim name or avatar Legacy Name",
                "type": "string"
            },
            {
                "name": "id",
                "description": "avatar or prim UUID",
                "type": "key"
            },
            {
                "name": "message",
                "description": "text spoken",
                "type": "string"
            }
        ]
    },
    {
        "name": "money",
        "descrition": "Triggered when money is paid to the prim in the amount by id.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Money",
        "param": [
            {
                "name": "id",
                "description": "who paid",
                "type": "key"
            },
            {
                "name": "amount",
                "description": "the amount paid",
                "type": "integer"
            }
        ]
    },
    {
        "name": "moving_end",
        "descrition": "Triggered when task stops moving\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Moving_end",
        "param": []
    },
    {
        "name": "moving_start",
        "descrition": "Triggered when task begins moving\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Moving_start",
        "param": []
    },
    {
        "name": "not_at_rot_target",
        "descrition": "Result of llRotTarget library function call\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Not_at_rot_target",
        "param": [
        ]
    },
    {
        "name": "not_at_target",
        "descrition": "Triggered if an object has not yet reached the target set by the call to llTarget.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Not_at_target",
        "param": [
        ]
    },
    {
        "name": "no_sensor",
        "descrition": "Result of a call to llSensor or llSensorRepeat.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/No_sensor",
        "param": [
        ]
    },
    {
        "name": "object_rez",
        "descrition": "Triggered when the object rezzes an object.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Object_rez",
        "param": []
    },
    {
        "name": "on_rez",
        "descrition": "Triggered when an object is rezzed (by script or by user). Also triggered in attachments when a user logs in, or when the object is attached from inventory.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/On_rez",
        "param": []
    },
    {
        "name": "path_update",
        "descrition": "Event description goes here.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Path_update",
        "param": [
            {
                "name": "type",
                "description": "A PU_*, it's the path event type",
                "type": "integer"
            },
            {
                "name": "reserved",
                "description": "Reserved; not currently used.",
                "type": "list"
            }
        ]
    },
    {
        "name": "remote_data",
        "descrition": "Triggered by various XML-RPC calls.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Remote_data",
        "param": [
            {
                "name": "event_type",
                "description": "",
                "type": "integer"
            },
            {
                "name": "channel",
                "description": "",
                "type": "key"
            },
            {
                "name": "message_id",
                "description": "",
                "type": "key"
            },
            {
                "name": "sender",
                "description": "",
                "type": "string"
            },
            {
                "name": "idata",
                "description": "",
                "type": "integer"
            },
            {
                "name": "sdata",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "run_time_permissions",
        "descrition": "Triggered when an agent grants run time permissions to this script.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Run_time_permissions",
        "param": []
    },
    {
        "name": "sensor",
        "descrition": "Results from a call to either llSensor or llSensorRepeat.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Sensor",
        "param": []
    },
    {
        "name": "state_entry",
        "descrition": "Triggered on any state transition and startup\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/State_entry",
        "param": [
        ]
    },
    {
        "name": "state_exit",
        "descrition": "Triggered on a qualifying state transition.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/State_exit",
        "param": []
    },
    {
        "name": "timer",
        "descrition": "Repeats the code in the timer(). Result of the llSetTimerEvent library function call.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Timer",
        "param": []
    },
    {
        "name": "touch",
        "descrition": "Triggered whilst an agent is clicking the task. It will continue to be triggered until the the prim/object is stopped being clicked (it triggers multiple times).\nTriggered on touch start, each minimum event delay while held, and touch end.\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Touch",
        "param": []
    },
    {
        "name": "touch_end",
        "descrition": "Triggered when agent stops clicking on task\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Touch_end",
        "param": []
    },
    {
        "name": "touch_start",
        "descrition": "Triggered by the start of agent clicking on task\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Touch_start",
        "param": []
    },
    {
        "name": "transaction_result",
        "descrition": "Triggered when task receives asynchronous data\n",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/Transaction_result",
        "param": [
            {
                "name": "id",
                "description": "matches the return of the llTransfer* function",
                "type": "key"
            },
            {
                "name": "success",
                "description": "TRUE if the transfer succeeded otherwise FALSE.",
                "type": "integer"
            },
            {
                "name": "data",
                "description": "On successful transactions this will contain a CSV of information pertaining to the transaction. In failure, a string will be returned matching one of the error tags below.",
                "type": "string"
            }
        ]
    }
];