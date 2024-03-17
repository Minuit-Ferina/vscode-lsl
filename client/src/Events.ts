import { Directory } from './directory';

export const Events = new Directory([
    {
        "name": "at_rot_target",
        "description": "Result of llRotTarget library function call.",
        "returnType": "",
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
        "description": "Result of llTarget library function call.",
        "returnType": "",
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
        "name": "attach",
        "description": "Triggered in an object when the object attaches or detaches from agent.",
        "returnType": "",
        "param": [
            {
                "name": "id",
                "description": "the avatar if attached, if not attached NULL_KEY.",
                "type": "key"
            }
        ]
    },
    {
        "name": "changed",
        "description": "Various changes to the object/prim trigger this event.\nMultiple changes can be represented in a single event, so use bitwise arithmetic.",
        "returnType": "",
        "param": [
            {
                "name": "change",
                "description": "bit field of CHANGED_* flags",
                "type": "integer"
            }
        ]
    },
    {
        "name": "collision",
        "description": "Triggered while task is colliding with another task.",
        "returnType": "",
        "param": [
            {
                "name": "num_detected",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "collision_end",
        "description": "Triggered when task stops colliding with another task.",
        "returnType": "",
        "param": [
            {
                "name": "num_detected",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "collision_start",
        "description": "Triggered when task starts colliding with another task.",
        "returnType": "",
        "param": [
            {
                "name": "num_detected",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "control",
        "description": "Result of llTakeControls library function call and user input.",
        "returnType": "",
        "param": [
            {
                "name": "id",
                "description": "avatar UUID",
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
        "description": "Triggered when task receives asynchronous data.",
        "returnType": "",
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
        "description": "Triggered as a result of calling llGetNextEmail where there is a matching email in the email queue.\n\nThe email queue is associated with the prim and any script in the prim can access it.\nThe prim's email address is its key with \"@lsl.secondlife.com\" appended, llGetKey() + \"@lsl.secondlife.com\".",
        "returnType": "",
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
                "description": "The number of emails remaining in the email queue.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "experience_permissions",
        "description": "The agent has approved an experience permissions request. This may be through interaction with the experience permission dialog or the experience profile, or automatically if the agent has previously approved the experience.",
        "returnType": "",
        "param": [
            {
                "name": "agent_id",
                "description": "avatar UUID approving permission",
                "type": "key"
            }
        ]
    },
    {
        "name": "experience_permissions_denied",
        "description": "The agent has denied experience permission.\n\nThis event may be generated in many cases:\n* In response to a call to llRequestExperiencePermissions if any of the following is true:\n** The agent does not respond to the experience permission dialog. This will happen after a long delay if the agent is running a viewer which doesn't understand the request or if the agent has blocked the object.\n** The agent selects \"Block Experience\" in the experience permission dialog.\n** The agent has previously blocked the experience through another experience permission dialog or through the experience profile.\n** An attachment is asking for permission from an agent other than its owner.\n** The experience cannot run on the region because it is blocked or exceeds the maturity rating of the region.\n* The experience can no longer run:\n** The script has moved to a region where the experience cannot run because it is blocked or it exceeds the maturity rating of the region.\n** The script has moved to a parcel where it is blocked or not allowed.\n** The agent has blocked the experience from the experience profile.\n** The agent has moved to a parcel where the experience cannot run.",
        "returnType": "",
        "param": [
            {
                "name": "agent_id",
                "description": "avatar UUID that denied permission.",
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
        "name": "game_control",
        "description": "Experimental event only available in some testing regions (soon). Triggered when compatible viewer sends fresh GameControlInput message, but only for scripts on attachments or seat.",
        "returnType": "",
        "param": [
            {
                "name": "id",
                "description": "avatar UUID",
                "type": "key"
            },
            {
                "name": "button_levels",
                "description": "bitfield of buttons held down",
                "type": "integer"
            },
            {
                "name": "axes",
                "description": "list of axes float values in range [-1, 1]",
                "type": "list"
            }
        ]
    },
    {
        "name": "http_request",
        "description": "Triggered when task receives an HTTP request.",
        "returnType": "",
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
        "description": "Triggered when task receives a response to one of its llHTTPRequest.",
        "returnType": "",
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
        "description": "Triggered in the root when physical object or attached avatar is colliding with land.",
        "returnType": "",
        "param": [
            {
                "name": "pos",
                "description": "position of collision with the ground",
                "type": "vector"
            }
        ]
    },
    {
        "name": "land_collision_end",
        "description": "Triggered in the root when a physical object or attached avatar stops colliding with land.",
        "returnType": "",
        "param": [
            {
                "name": "pos",
                "description": "position of last collision with the ground",
                "type": "vector"
            }
        ]
    },
    {
        "name": "land_collision_start",
        "description": "Triggered in the root when a physical object or attached avatar starts colliding with land.",
        "returnType": "",
        "param": [
            {
                "name": "pos",
                "description": "position of collision with the ground",
                "type": "vector"
            }
        ]
    },
    {
        "name": "link_message",
        "description": "Triggered when the script receives a link message that was sent by a call to llMessageLinked. llMessageLinked is used to send messages from one script to another.\nid is often used as a second string field (in LSL the Typecasting between string and key types has no effect on the data contained. The sizes of str and id are only limited by available script memory.",
        "returnType": "",
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
                "description": "The message that was sent from the script that called llMessageLinked",
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
        "name": "linkset_data",
        "description": "The linkset_data event fires in all scripts in a linkset whenever the datastore has been modified through a call to one of the llLinksetData functions.\nThis event fires in all scripts in a linkset whenever the datastore is changed.",
        "returnType": "",
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
                "description": "The new value of the pair. Empty string if pair was deleted or is password-protected (see llLinksetDataWriteProtected).",
                "type": "string"
            }
        ]
    },
    {
        "name": "listen",
        "description": "Triggered by chat, use llListen to enable and filter.",
        "returnType": "",
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
        "description": "Triggered when money is paid to the prim in the amount by id.",
        "returnType": "",
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
        "description": "Triggered when task stops moving.",
        "returnType": "",
        "param": []
    },
    {
        "name": "moving_start",
        "description": "Triggered when task begins moving.",
        "returnType": "",
        "param": []
    },
    {
        "name": "no_sensor",
        "description": "Result of a call to llSensor or llSensorRepeat.",
        "returnType": "",
        "param": []
    },
    {
        "name": "not_at_rot_target",
        "description": "Result of llRotTarget library function call.",
        "returnType": "",
        "param": []
    },
    {
        "name": "not_at_target",
        "description": "Triggered if an object has not yet reached the target set by the call to llTarget.\nThis event may be triggered multiple times if the target has not been reached.",
        "returnType": "",
        "param": []
    },
    {
        "name": "object_rez",
        "description": "Triggered when the object rezzes an object.",
        "returnType": "",
        "param": [
            {
                "name": "id",
                "description": "UUID of object rezzed.",
                "type": "key"
            }
        ]
    },
    {
        "name": "on_death",
        "description": "This event is triggered on all attachments worn by an avatar when that avatar's health reaches 0.",
        "returnType": "",
        "param": []
    },
    {
        "name": "on_rez",
        "description": "Triggered when an object is rezzed (by script or by user). Also triggered in attachments when a user logs in, or when the object is attached from inventory.\n\nstart_param is always zero when an object is not rezzed by llRezObject or llRezAtRoot.\nWhen an object is rezzed by llRezObject or llRezAtRoot, then start_param will be the value given as the last parameter of the rezzing command.\nstart_param is available at any subsequent time by calling llGetStartParameter (unless it has been overridden by llRemoteLoadScriptPin).",
        "returnType": "",
        "param": [
            {
                "name": "start_param",
                "description": "parameter supplied to llRezObject or llRezAtRoot",
                "type": "integer"
            }
        ]
    },
    {
        "name": "path_update",
        "description": "Event description goes here.",
        "returnType": "",
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
        "description": "Triggered by various XML-RPC calls.",
        "returnType": "",
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
        "description": "Triggered when an agent grants run time permissions to this script.",
        "returnType": "",
        "param": [
            {
                "name": "perm",
                "description": "mask of PERMISSIONS_* flags granting permissions",
                "type": "integer"
            }
        ]
    },
    {
        "name": "sensor",
        "description": "Results from a call to either llSensor or llSensorRepeat.\n\nThe results are ordered from nearest to furthest.\nnum_detected is always greater than zero, the no_sensor event is triggered if no objects/avatars were found.",
        "returnType": "",
        "param": [
            {
                "name": "num_detected",
                "description": "number of objects/avatars found",
                "type": "integer"
            }
        ]
    },
    {
        "name": "state_entry",
        "description": "Triggered on any state transition and startup.",
        "returnType": "",
        "param": []
    },
    {
        "name": "state_exit",
        "description": "Triggered on a qualifying state transition.",
        "returnType": "",
        "param": []
    },
    {
        "name": "timer",
        "description": "Repeats the code in the timer(). Result of the llSetTimerEvent library function call.",
        "returnType": "",
        "param": []
    },
    {
        "name": "touch",
        "description": "Triggered whilst an agent is clicking the task. It will continue to be triggered until the the prim/object is stopped being clicked (it triggers multiple times).\nTriggered on touch start, each minimum event delay while held, and touch end.",
        "returnType": "",
        "param": [
            {
                "name": "num_detected",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "touch_end",
        "description": "Triggered when agent stops clicking on task.",
        "returnType": "",
        "param": [
            {
                "name": "num_detected",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "touch_start",
        "description": "Triggered by the start of agent clicking on task.",
        "returnType": "",
        "param": [
            {
                "name": "num_detected",
                "description": "Number of agents detected touching during the last clock cycle",
                "type": "integer"
            }
        ]
    },
    {
        "name": "transaction_result",
        "description": "Triggered when task receives asynchronous data.",
        "returnType": "",
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
]);