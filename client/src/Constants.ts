import {Directory} from './directory';

export const Constants = new Directory([
    {
        "name": "ACTIVE",
        "type": "integer",
        "value": "0x2",
        "description": "If it is contained in the result of llDetectedType(), it means it is physical tasks. (Physical objects & agents).\nIf it is used as an filter of llSensor() or llSensorRepeat(), it will search for physical objects that are moving or objects containing an active script. Thus, it is using SL server resources now."
    },
    {
        "name": "AGENT",
        "type": "integer",
        "value": "0x1",
        "description": "If it is contained in the result of llDetectedType, it means it is avatar.\nIf it is used as an filter of llSensor or llSensorRepeat, it will search for avatars  legacy name. Use of this constant in this context is not recommended as AGENT_BY_LEGACY_NAME is more informative."
    },
    {
        "name": "AGENT_ALWAYS_RUN",
        "type": "integer",
        "value": "0x1000",
        "description": "Used with llGetAgentInfo to determine if the queried avatar has 'always running' set."
    },
    {
        "name": "AGENT_ATTACHMENTS",
        "type": "integer",
        "value": "0x0002",
        "description": ""
    },
    {
        "name": "AGENT_AUTOPILOT",
        "type": "integer",
        "value": "0x2000",
        "description": "This value is set when the user selects \"Go Here\" on the ground, or uses the optional Double-Click Auto-Pilot feature.\n\nUnder Viewer 2.0 and later, it is also set when:\n* the user selects \"Sit Here\" on the ground.\n* an object is selected or edited, ''and'' that selection can trigger a control (CONTROL_ROT_RIGHT and CONTROL_ROT_LEFT can be activated when selecting an object near the far right or left edge of the screen)."
    },
    {
        "name": "AGENT_AWAY",
        "type": "integer",
        "value": "0x0040",
        "description": "Indicates that the agent has either toggled away or has been inactive for too long."
    },
    {
        "name": "AGENT_BUSY",
        "type": "integer",
        "value": "0x0800",
        "description": ""
    },
    {
        "name": "AGENT_BY_LEGACY_NAME",
        "type": "integer",
        "value": "0x1",
        "description": "If it is contained in the result of llDetectedType, it means it is avatar.\nIf it is used as an filter of llSensor or llSensorRepeat, it will search for avatars by legacy name."
    },
    {
        "name": "AGENT_BY_USERNAME",
        "type": "integer",
        "value": "0x10",
        "description": "See Avatar Names"
    },
    {
        "name": "AGENT_CROUCHING",
        "type": "integer",
        "value": "0x0400",
        "description": ""
    },
    {
        "name": "AGENT_FLYING",
        "type": "integer",
        "value": "0x0001",
        "description": "Used with llGetAgentInfo to determine if the queried avatar is flying."
    },
    {
        "name": "AGENT_IN_AIR",
        "type": "integer",
        "value": "0x0100",
        "description": ""
    },
    {
        "name": "AGENT_LIST_PARCEL",
        "type": "integer",
        "value": "1",
        "description": "Agents on the same parcel where the script is running."
    },
    {
        "name": "AGENT_LIST_PARCEL_OWNER",
        "type": "integer",
        "value": "2",
        "description": "Agents on any parcel in the region where the parcel owner is the same as the owner of the parcel under the scripted object."
    },
    {
        "name": "AGENT_LIST_REGION",
        "type": "integer",
        "value": "4",
        "description": "Returns any/all agents in the region."
    },
    {
        "name": "AGENT_MOUSELOOK",
        "type": "integer",
        "value": "0x0008",
        "description": ""
    },
    {
        "name": "AGENT_ON_OBJECT",
        "type": "integer",
        "value": "0x0020",
        "description": ""
    },
    {
        "name": "AGENT_SCRIPTED",
        "type": "integer",
        "value": "0x0004",
        "description": "Carrying scripted objects"
    },
    {
        "name": "AGENT_SITTING",
        "type": "integer",
        "value": "0x0010",
        "description": ""
    },
    {
        "name": "AGENT_TYPING",
        "type": "integer",
        "value": "0x0200",
        "description": ""
    },
    {
        "name": "AGENT_WALKING",
        "type": "integer",
        "value": "0x0080",
        "description": "Used with llGetAgentInfo to determine if the queried avatar is walking."
    },
    {
        "name": "ALL_SIDES",
        "type": "integer",
        "value": "-1",
        "description": ""
    },
    {
        "name": "ANIM_ON",
        "type": "integer",
        "value": "0x01",
        "description": ""
    },
    {
        "name": "ATTACH_AVATAR_CENTER",
        "type": "integer",
        "value": "40",
        "description": ""
    },
    {
        "name": "ATTACH_BACK",
        "type": "integer",
        "value": "9",
        "description": ""
    },
    {
        "name": "ATTACH_BELLY",
        "type": "integer",
        "value": "28",
        "description": ""
    },
    {
        "name": "ATTACH_CHEST",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "ATTACH_CHIN",
        "type": "integer",
        "value": "12",
        "description": "This constant is returned when the attachment point is the chin."
    },
    {
        "name": "ATTACH_FACE_JAW",
        "type": "integer",
        "value": "47",
        "description": ""
    },
    {
        "name": "ATTACH_FACE_LEAR",
        "type": "integer",
        "value": "48",
        "description": ""
    },
    {
        "name": "ATTACH_FACE_LEYE",
        "type": "integer",
        "value": "50",
        "description": ""
    },
    {
        "name": "ATTACH_FACE_REAR",
        "type": "integer",
        "value": "49",
        "description": ""
    },
    {
        "name": "ATTACH_FACE_REYE",
        "type": "integer",
        "value": "51",
        "description": ""
    },
    {
        "name": "ATTACH_FACE_TONGUE",
        "type": "integer",
        "value": "52",
        "description": ""
    },
    {
        "name": "ATTACH_GROIN",
        "type": "integer",
        "value": "53",
        "description": ""
    },
    {
        "name": "ATTACH_HEAD",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "ATTACH_HIND_LFOOT",
        "type": "integer",
        "value": "54",
        "description": ""
    },
    {
        "name": "ATTACH_HIND_RFOOT",
        "type": "integer",
        "value": "55",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_BOTTOM",
        "type": "integer",
        "value": "37",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_BOTTOM_LEFT",
        "type": "integer",
        "value": "36",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_BOTTOM_RIGHT",
        "type": "integer",
        "value": "38",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_CENTER_1",
        "type": "integer",
        "value": "35",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_CENTER_2",
        "type": "integer",
        "value": "31",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_TOP_CENTER",
        "type": "integer",
        "value": "33",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_TOP_LEFT",
        "type": "integer",
        "value": "34",
        "description": ""
    },
    {
        "name": "ATTACH_HUD_TOP_RIGHT",
        "type": "integer",
        "value": "32",
        "description": ""
    },
    {
        "name": "ATTACH_LEAR",
        "type": "integer",
        "value": "13",
        "description": "Left ear"
    },
    {
        "name": "ATTACH_LEFT_PEC",
        "type": "integer",
        "value": "29",
        "description": ""
    },
    {
        "name": "ATTACH_LEYE",
        "type": "integer",
        "value": "15",
        "description": ""
    },
    {
        "name": "ATTACH_LFOOT",
        "type": "integer",
        "value": "7",
        "description": ""
    },
    {
        "name": "ATTACH_LHAND",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "ATTACH_LHAND_RING1",
        "type": "integer",
        "value": "41",
        "description": ""
    },
    {
        "name": "ATTACH_LHIP",
        "type": "integer",
        "value": "25",
        "description": "Left Hip"
    },
    {
        "name": "ATTACH_LLARM",
        "type": "integer",
        "value": "21",
        "description": "Lower Left Arm"
    },
    {
        "name": "ATTACH_LLLEG",
        "type": "integer",
        "value": "27",
        "description": "Left lower leg"
    },
    {
        "name": "ATTACH_LSHOULDER",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "ATTACH_LUARM",
        "type": "integer",
        "value": "20",
        "description": "Left Upper Arm"
    },
    {
        "name": "ATTACH_LULEG",
        "type": "integer",
        "value": "26",
        "description": "Left Upper Leg"
    },
    {
        "name": "ATTACH_LWING",
        "type": "integer",
        "value": "45",
        "description": ""
    },
    {
        "name": "ATTACH_MOUTH",
        "type": "integer",
        "value": "11",
        "description": ""
    },
    {
        "name": "ATTACH_NECK",
        "type": "integer",
        "value": "39",
        "description": ""
    },
    {
        "name": "ATTACH_NOSE",
        "type": "integer",
        "value": "17",
        "description": ""
    },
    {
        "name": "ATTACH_PELVIS",
        "type": "integer",
        "value": "10",
        "description": ""
    },
    {
        "name": "ATTACH_REAR",
        "type": "integer",
        "value": "14",
        "description": "Right ear"
    },
    {
        "name": "ATTACH_REYE",
        "type": "integer",
        "value": "16",
        "description": ""
    },
    {
        "name": "ATTACH_RFOOT",
        "type": "integer",
        "value": "8",
        "description": ""
    },
    {
        "name": "ATTACH_RHAND",
        "type": "integer",
        "value": "6",
        "description": "Indicates the right hand attach point, which just so happens to be the default attach point."
    },
    {
        "name": "ATTACH_RHAND_RING1",
        "type": "integer",
        "value": "42",
        "description": ""
    },
    {
        "name": "ATTACH_RHIP",
        "type": "integer",
        "value": "22",
        "description": ""
    },
    {
        "name": "ATTACH_RIGHT_PEC",
        "type": "integer",
        "value": "30",
        "description": ""
    },
    {
        "name": "ATTACH_RLARM",
        "type": "integer",
        "value": "19",
        "description": "Right lower arm"
    },
    {
        "name": "ATTACH_RLLEG",
        "type": "integer",
        "value": "24",
        "description": ""
    },
    {
        "name": "ATTACH_RSHOULDER",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "ATTACH_RUARM",
        "type": "integer",
        "value": "18",
        "description": "Right upper arm"
    },
    {
        "name": "ATTACH_RULEG",
        "type": "integer",
        "value": "23",
        "description": "Right upper leg"
    },
    {
        "name": "ATTACH_RWING",
        "type": "integer",
        "value": "46",
        "description": ""
    },
    {
        "name": "ATTACH_TAIL_BASE",
        "type": "integer",
        "value": "43",
        "description": ""
    },
    {
        "name": "ATTACH_TAIL_TIP",
        "type": "integer",
        "value": "44",
        "description": ""
    },
    {
        "name": "CAMERA_ACTIVE",
        "type": "integer",
        "value": "12",
        "description": ""
    },
    {
        "name": "CAMERA_BEHINDNESS_ANGLE",
        "type": "integer",
        "value": "8",
        "description": ""
    },
    {
        "name": "CAMERA_BEHINDNESS_LAG",
        "type": "integer",
        "value": "9",
        "description": ""
    },
    {
        "name": "CAMERA_DISTANCE",
        "type": "integer",
        "value": "7",
        "description": ""
    },
    {
        "name": "CAMERA_FOCUS",
        "type": "integer",
        "value": "17",
        "description": ""
    },
    {
        "name": "CAMERA_FOCUS_LAG",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "CAMERA_FOCUS_LOCKED",
        "type": "integer",
        "value": "22",
        "description": ""
    },
    {
        "name": "CAMERA_FOCUS_OFFSET",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "CAMERA_FOCUS_THRESHOLD",
        "type": "integer",
        "value": "11",
        "description": ""
    },
    {
        "name": "CAMERA_PITCH",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "CAMERA_POSITION",
        "type": "integer",
        "value": "13",
        "description": ""
    },
    {
        "name": "CAMERA_POSITION_LAG",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "CAMERA_POSITION_LOCKED",
        "type": "integer",
        "value": "21",
        "description": ""
    },
    {
        "name": "CAMERA_POSITION_THRESHOLD",
        "type": "integer",
        "value": "10",
        "description": ""
    },
    {
        "name": "CHANGED_ALLOWED_DROP",
        "type": "integer",
        "value": "0x40",
        "description": "A user other then the owner (or the owner if the object is no-mod) has added inventory to the prim. This is only possible if enabled with llAllowInventoryDrop."
    },
    {
        "name": "CHANGED_COLOR",
        "type": "integer",
        "value": "0x2",
        "description": "Prim color or alpha parameters have changed"
    },
    {
        "name": "CHANGED_INVENTORY",
        "type": "integer",
        "value": "0x1",
        "description": "Prim inventory has changed by someone who has modification rights to a prim.\n\nInventory changes that cause this event are:\n*Inventory item is added or deleted\n*Inventory item name is changed\n*Inventory item permissions are changed\n*A different script in inventory is recompiled\n*A notecard in inventory is saved\nThis event does not occur when:\n*A no-copy inventory item is moved to user inventory\n*A script in inventory is reset\n*A user without modification rights drops an object into a prim's inventory due to llAllowInventoryDrop.\n**In this situation the CHANGED_ALLOWED_DROP flag is set instead of CHANGED_INVENTORY.\n*An object that was rezzed from inventory is saved back to object contents\n\nImportant : This event is triggered in the root prim by a change in any child prim, unless the child prim has a handler for it. It is not triggered in any other linked prim."
    },
    {
        "name": "CHANGED_LINK",
        "type": "integer",
        "value": "0x20",
        "description": "The number of prims making up the object or avatars seated on the object have changed. This event also occurs when duplicating a linked object or when a prim in an object changes type or shape. This event does not occur when: an object is attached or detached, in an attachment when the avatar sits or unsits, in an attachment when another object is attached or detached, or when a single prim is duplicated."
    },
    {
        "name": "CHANGED_MEDIA",
        "type": "integer",
        "value": "0x800",
        "description": "Prim Media on the prim has changed."
    },
    {
        "name": "CHANGED_OWNER",
        "type": "integer",
        "value": "0x80",
        "description": "The object has changed owners. This event occurs in the original object when a user takes it or takes a copy of it or when the owner deeds it to a group. The event occurs in the new object when it is first rezzed. \n\nCounter-intuitively, this event also occurs in the ''original'' object when it is purchased or a copy of it is purchased (although the original object does ''not'' in fact change owner). The event does not occur in the original object when its contents are purchased."
    },
    {
        "name": "CHANGED_REGION",
        "type": "integer",
        "value": "0x100",
        "description": "The object has changed region by crossing a region boundary (or by teleporting, if attached). This event only occurs in the root prim of a linkset. This event does not occur in child prims of objects when they cross a region boundary."
    },
    {
        "name": "CHANGED_REGION_START",
        "type": "integer",
        "value": "0x400",
        "description": "The region containing the object has just come online."
    },
    {
        "name": "CHANGED_RENDER_MATERIAL",
        "type": "integer",
        "value": "0x1000",
        "description": "Prim material ID or material overrides have changed on one or more faces."
    },
    {
        "name": "CHANGED_SCALE",
        "type": "integer",
        "value": "0x8",
        "description": "The prim scale of at least one prim in the linked object has changed. Only the root prim will receive this event."
    },
    {
        "name": "CHANGED_SHAPE",
        "type": "integer",
        "value": "0x4",
        "description": "PRIM_TYPE (box, prism, torus, taper, twist, cut …) has changed."
    },
    {
        "name": "CHANGED_TELEPORT",
        "type": "integer",
        "value": "0x200",
        "description": "The avatar this object is attached to has teleported. This event only occurs in the root prim of an attachment when the user has teleported. This event does not occur in child prims of attachments, nor does it occur due to a \"sit teleport\". If the user teleports into a parcel where their scripts are disabled then the CHANGED_TELEPORT event is dropped and does not occur even if the user moved to a script-enabled parcel."
    },
    {
        "name": "CHANGED_TEXTURE",
        "type": "integer",
        "value": "0x10",
        "description": "Prim texture parameters (shine/bump setting, repeats, flip, rotation, or offset) have changed. \n\nTransparency or color changes trigger a CHANGED_COLOR event not a CHANGED_TEXTURE event."
    },
    {
        "name": "CHARACTER_ACCOUNT_FOR_SKIPPED_FRAMES",
        "type": "integer",
        "value": "14",
        "description": ""
    },
    {
        "name": "CHARACTER_AVOIDANCE_MODE",
        "type": "integer",
        "value": "5",
        "description": "Used in the functions of pathfinding . Is combined with a mask bit flags. The default is AVOID_CHARACTERS with AVOID_DYNAMIC_OBSTACLES.\nAllows you to specify that a character should not try to avoid other characters, should not try to avoid dynamic obstacles (relatively fast moving objects and avatars), or both.\nllCreateCharacter"
    },
    {
        "name": "CHARACTER_DESIRED_SPEED",
        "type": "integer",
        "value": "1",
        "description": "Constant used to indicate that the following argument is the desired speed for a Pathfinding character."
    },
    {
        "name": "CHARACTER_DESIRED_TURN_SPEED",
        "type": "integer",
        "value": "12",
        "description": "Used in the functions of pathfinding . Is combined with a float. The default 6 meters/second\nSpecifies the character's maximum speed while turning \nllCreateCharacter"
    },
    {
        "name": "CHARACTER_LENGTH",
        "type": "integer",
        "value": "3",
        "description": "Constant used to indicate that the following argument is the length of the capsule for a Pathfinding character. This is used to help denote the size of the character."
    },
    {
        "name": "CHARACTER_MAX_ACCEL",
        "type": "integer",
        "value": "8",
        "description": "Used in the functions of pathfinding . Is combined with a float. The default 20 meters/s(-2).\nSpecifies the character's maximum acceleration rate. \nllCreateCharacter"
    },
    {
        "name": "CHARACTER_MAX_DECEL",
        "type": "integer",
        "value": "9",
        "description": "Used in the functions of pathfinding . Is combined with a float. The default 30 meters/s(-2).\nSpecifies the character's maximum deceleration rate. \nllCreateCharacter"
    },
    {
        "name": "CHARACTER_MAX_SPEED",
        "type": "integer",
        "value": "13",
        "description": "Used in the functions of pathfinding . Is combined with a float. The default is 20 meters/second\nSpecifies the character's maximum speed .\nCan t be inferior to 0.2 meters/second and can't be superior to 50 meters/second\nllCreateCharacter"
    },
    {
        "name": "CHARACTER_MAX_TURN_RADIUS",
        "type": "integer",
        "value": "10",
        "description": "Used in the functions of pathfinding . Is combined with a float. The default 1.25 meter.\nSpecifies the character's radius when the characters turns at the speed CHARACTER_DESIRED_TURN_SPEED\nllCreateCharacter"
    },
    {
        "name": "CHARACTER_ORIENTATION",
        "type": "integer",
        "value": "4",
        "description": "Constant used to indicate that the following argument is the orientation of the capsule for a Pathfinding character. This is used to help denote how to interpret the size of a character."
    },
    {
        "name": "CHARACTER_RADIUS",
        "type": "integer",
        "value": "2",
        "description": "Constant used to indicate that the following argument is the radius of the capsule for a Pathfinding character. This is used to help denote how to interpret the size of the character."
    },
    {
        "name": "CHARACTER_STAY_WITHIN_PARCEL",
        "type": "integer",
        "value": "15",
        "description": "Default setting is FALSE, leading to traditional pathfinding behavior.\nIf a parcel allows scripts and objects and the character does not have the CHARACTER_STAY_WITHIN_PARCEL option enabled, it can freely cross the parcel boundary in both directions.\nCharacters which have CHARACTER_STAY_WITHIN_PARCEL set to TRUE treat the parcel boundaries as one-way obstacles.\nPathfinding wander, flee, evade, and pursue behaviors will only choose goal points within their starting parcel.\nIf a character somehow manages to escape its original parcel (e.g. it was 'pushed' out), it will be able to return to the original parcel, but will be unable to leave the original parcel afterwards."
    },
    {
        "name": "CHARACTER_TYPE",
        "type": "integer",
        "value": "6",
        "description": "Used in combination with one of the character type flags. The default is CHARACTER_TYPE_NONE, other options are CHARACTER_TYPE_A, CHARACTER_TYPE_B, CHARACTER_TYPE_C and CHARACTER_TYPE_D. Note that the character type is not used to describe the behavior of the Pathfinding object but is used to describe the kind of surface and terrain that it prefers to travel. For example, a cow designed for a field should use character type B, but sheep designed to be herded along a road should use character type C.\nllCreateCharacter"
    },
    {
        "name": "CHARACTER_TYPE_A",
        "type": "integer",
        "value": "0",
        "description": "Used for character types that you prefer move in a way consistent with humanoids."
    },
    {
        "name": "CHARACTER_TYPE_B",
        "type": "integer",
        "value": "1",
        "description": "Used for character types that you prefer move in a way consistent with wild animals or off road vehicles."
    },
    {
        "name": "CHARACTER_TYPE_C",
        "type": "integer",
        "value": "2",
        "description": "Used for mechanical character types or road going vehicles."
    },
    {
        "name": "CHARACTER_TYPE_D",
        "type": "integer",
        "value": "3",
        "description": "Used for character types that are not consistent with the A, B, or C type."
    },
    {
        "name": "CHARACTER_TYPE_NONE",
        "type": "integer",
        "value": "4",
        "description": "Used to set no specific character type."
    },
    {
        "name": "CLICK_ACTION_BUY",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_NONE",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_OPEN",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_OPEN_MEDIA",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_PAY",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_PLAY",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_SIT",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_TOUCH",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_TOUCH",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "CLICK_ACTION_ZOOM",
        "type": "integer",
        "value": "7",
        "description": ""
    },
    {
        "name": "CONTENT_TYPE_ATOM",
        "type": "integer",
        "value": "4",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/atom+xml\"."
    },
    {
        "name": "CONTENT_TYPE_FORM",
        "type": "integer",
        "value": "7",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/x-www-form-urlencoded\"."
    },
    {
        "name": "CONTENT_TYPE_HTML",
        "type": "integer",
        "value": "1",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"text/html\"."
    },
    {
        "name": "CONTENT_TYPE_JSON",
        "type": "integer",
        "value": "5",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/json\"."
    },
    {
        "name": "CONTENT_TYPE_LLSD",
        "type": "integer",
        "value": "6",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/llsd+xml\"."
    },
    {
        "name": "CONTENT_TYPE_RSS",
        "type": "integer",
        "value": "8",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/rss+xml\"."
    },
    {
        "name": "CONTENT_TYPE_TEXT",
        "type": "integer",
        "value": "0",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"text/plain\"."
    },
    {
        "name": "CONTENT_TYPE_XHTML",
        "type": "integer",
        "value": "3",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/xhtml+xml\"."
    },
    {
        "name": "CONTENT_TYPE_XML",
        "type": "integer",
        "value": "2",
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/xml\"."
    },
    {
        "name": "CONTROL_BACK",
        "type": "integer",
        "value": "0x2",
        "description": ""
    },
    {
        "name": "CONTROL_DOWN",
        "type": "integer",
        "value": "0x20",
        "description": ""
    },
    {
        "name": "CONTROL_FWD",
        "type": "integer",
        "value": "0x1",
        "description": ""
    },
    {
        "name": "CONTROL_LBUTTON",
        "type": "integer",
        "value": "0x10000000",
        "description": ""
    },
    {
        "name": "CONTROL_LEFT",
        "type": "integer",
        "value": "0x4",
        "description": ""
    },
    {
        "name": "CONTROL_ML_LBUTTON",
        "type": "integer",
        "value": "0x40000000",
        "description": ""
    },
    {
        "name": "CONTROL_RIGHT",
        "type": "integer",
        "value": "0x8",
        "description": ""
    },
    {
        "name": "CONTROL_ROT_LEFT",
        "type": "integer",
        "value": "0x100",
        "description": ""
    },
    {
        "name": "CONTROL_ROT_RIGHT",
        "type": "integer",
        "value": "0x200",
        "description": ""
    },
    {
        "name": "CONTROL_UP",
        "type": "integer",
        "value": "0x10",
        "description": ""
    },
    {
        "name": "DATA_BORN",
        "type": "integer",
        "value": "3",
        "description": "Used with llRequestAgentData to return a string that contains the date the user joined SL, it is the ISO 8601 format of \"YYYY-MM-DD\". It is based on Pacific Time, not UTC."
    },
    {
        "name": "DATA_NAME",
        "type": "integer",
        "value": "2",
        "description": "Used with llRequestAgentData to return a string containing the avatars Name"
    },
    {
        "name": "DATA_ONLINE",
        "type": "integer",
        "value": "1",
        "description": "Used with llRequestAgentData to return a string that contains the integer boolean for if the user is online (or not). TRUE if online, FALSE if offline."
    },
    {
        "name": "DATA_PAYINFO",
        "type": "integer",
        "value": "8",
        "description": "Used with llRequestAgentData to return a string that contains the integer mask that can contain either of these two constants: PAYMENT_INFO_ON_FILE, PAYMENT_INFO_USED\n\nIt is important to know that it is possible to have PAYMENT_INFO_USED but currently not have PAYMENT_INFO_ON_FILE (payment info can be removed after being used)."
    },
    {
        "name": "DATA_RATING",
        "type": "integer",
        "value": "4",
        "description": "Used with llRequestAgentData to return the string \"0, 0, 0, 0, 0, 0\".\n\nThe CSV list returned used to contain the positive and negative ratings the user has acquired before ratings were removed from SL."
    },
    {
        "name": "DATA_SIM_POS",
        "type": "integer",
        "value": "5",
        "description": "returns vector in global coordinates"
    },
    {
        "name": "DATA_SIM_RATING",
        "type": "integer",
        "value": "7",
        "description": "returns string simulator rating \"PG\", \"MATURE\", \"ADULT\" or \"UNKNOWN\""
    },
    {
        "name": "DATA_SIM_STATUS",
        "type": "integer",
        "value": "6",
        "description": "Returns one of these strings.\n* \"up\": simulator currently up and running\n* \"down\": simulator currently down\n* \"starting\": simulator currently starting\n* \"stopping\": simulator currently stopping\n* \"crashed\": simulator has crashed\n* \"unknown\": simulator status unknown or unknown simulator"
    },
    {
        "name": "DEBUG_CHANNEL",
        "type": "integer",
        "value": "0x7FFFFFFF",
        "description": "Chat channel reserved for script debugging and error messages. The client will display chat on this channel in the script console if the avatar is within the appropriate distance for the communication type (see Chat for details).\n\nServer-generated errors are broadcast the same distance as llSay.\n\nRegardless of the source, most viewers filter out messages received on DEBUG_CHANNEL from objects owned by others."
    },
    {
        "name": "DEG_TO_RAD",
        "type": "float",
        "value": "0.017453292519943295769236907684886f",
        "description": ""
    },
    {
        "name": "EOF",
        "type": "string",
        "value": "\"\\n\\n\\n\"",
        "description": "EOF is a value returned by the dataserver event, as a result of a call to llGetNotecardLine, specifically when the requested line is past the end of the notecard. The value returned equals \"\\n\\n\\n\", which is to say, three newline characters (0x0a).\n \nEssentially, it is used to let you know when you have finished reading information (usually user configurable parameters) from a notecard, and are ready to move onto the next stage or state of the script."
    },
    {
        "name": "ERR_GENERIC",
        "type": "integer",
        "value": "-1",
        "description": "A nebulous and inexplicable error, nothing is known about it."
    },
    {
        "name": "ERR_MALFORMED_PARAMS",
        "type": "integer",
        "value": "-3",
        "description": "Return Value for llReturnObject* functions. Indicates function Parameters are malformed."
    },
    {
        "name": "ERR_PARCEL_PERMISSIONS",
        "type": "integer",
        "value": "-2",
        "description": "Return Value for llReturnObject* functions. Indicates Permission lacked to perform task on specified parcel."
    },
    {
        "name": "ERR_RUNTIME_PERMISSIONS",
        "type": "integer",
        "value": "-4",
        "description": "Return Value for llReturnObject* functions. Indicates Script lacks the runtime permission to perform the requested task."
    },
    {
        "name": "ERR_THROTTLED",
        "type": "integer",
        "value": "-5",
        "description": "Return Value for llReturnObject* functions. Indicates Task has been throttled. Try again later."
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_AGENT_ADD",
        "type": "integer",
        "value": "4",
        "description": "Used in input parameters of llManageEstateAccess . Add an agent to this estate's Allowed Residents list\nllManageEstateAccess"
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_AGENT_REMOVE",
        "type": "integer",
        "value": "8",
        "description": "Used in input parameters of llManageEstateAccess . Remove an agent to this estate's Allowed Residents list\nllManageEstateAccess"
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_GROUP_ADD",
        "type": "integer",
        "value": "16",
        "description": "Used in input parameters of llManageEstateAccess .Add a group to this estate's Allowed groups list.\nllManageEstateAccess"
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_GROUP_REMOVE",
        "type": "integer",
        "value": "32",
        "description": "Used in input parameters of llManageEstateAccess . Remove the group from this estate's Allowed groups list.\nllManageEstateAccess"
    },
    {
        "name": "ESTATE_ACCESS_BANNED_AGENT_ADD",
        "type": "integer",
        "value": "64",
        "description": "Used in input parameters of llManageEstateAccess. Add the agent to this estate's Banned residents list.\nllManageEstateAccess"
    },
    {
        "name": "ESTATE_ACCESS_BANNED_AGENT_REMOVE",
        "type": "integer",
        "value": "128",
        "description": "Used in input parameters of llManageEstateAccess . Remove the agent from this estate's Banned residents list.\nllManageEstateAccess"
    },
    {
        "name": "FALSE",
        "type": "integer",
        "value": "0",
        "description": "Constant used to define the FALSE value in conditional structures or variables/constants in general. Usually it's used because it is more readable, indicating a boolean value instead a integer value (0)."
    },
    {
        "name": "FORCE_DIRECT_PATH",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "HORIZONTAL",
        "type": "integer",
        "value": "1",
        "description": "Constant to indicate that the orientation of the capsule for a Pathfinding character is horizontal."
    },
    {
        "name": "HTTP_ACCEPT",
        "type": "integer",
        "value": "8",
        "description": ""
    },
    {
        "name": "HTTP_BODY_MAXLENGTH",
        "type": "integer",
        "value": "2",
        "description": "Used with llHTTPRequest to set the maximum size the script will accept* for an HTTP body. The largest value this can be set to depends upon the VM that is being used."
    },
    {
        "name": "HTTP_BODY_TRUNCATED",
        "type": "integer",
        "value": "0",
        "description": "Truncation point in bytes"
    },
    {
        "name": "HTTP_CUSTOM_HEADER",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "HTTP_METHOD",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "HTTP_MIMETYPE",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "HTTP_PRAGMA_NO_CACHE",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "HTTP_USER_AGENT",
        "type": "integer",
        "value": "7",
        "description": ""
    },
    {
        "name": "HTTP_VERBOSE_THROTTLE",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "HTTP_VERIFY_CERT",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "INVENTORY_ALL",
        "type": "integer",
        "value": "-1",
        "description": "Used with Inventory functions and specifies ALL TYPES of inventory items will be retrieved by the function."
    },
    {
        "name": "INVENTORY_ANIMATION",
        "type": "integer",
        "value": "20",
        "description": "Used with Inventory functions and specifies inventory items of ANIMATION type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_BODYPART",
        "type": "integer",
        "value": "13",
        "description": "Used with Inventory functions and specifies inventory items of BODYPART type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_CLOTHING",
        "type": "integer",
        "value": "5",
        "description": "Used with Inventory functions and specifies inventory items of CLOTHING type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_GESTURE",
        "type": "integer",
        "value": "21",
        "description": "Used with Inventory functions and specifies inventory items of GESTURE type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_LANDMARK",
        "type": "integer",
        "value": "3",
        "description": "Used with Inventory functions and specifies inventory items of LANDMARK type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_MATERIAL",
        "type": "integer",
        "value": "57",
        "description": "Used with Inventory functions and specifies inventory items of MATERIAL type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_NONE",
        "type": "integer",
        "value": "-1",
        "description": "Value returned by Inventory functions, to indicate that the inventory item doesn't exist."
    },
    {
        "name": "INVENTORY_NOTECARD",
        "type": "integer",
        "value": "7",
        "description": "Used with Inventory functions and specifies inventory items of NOTECARD type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_OBJECT",
        "type": "integer",
        "value": "6",
        "description": "Used with Inventory functions and specifies inventory items of OBJECT type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_SCRIPT",
        "type": "integer",
        "value": "10",
        "description": "Used with Inventory functions and specifies inventory items of SCRIPT type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_SETTING",
        "type": "integer",
        "value": "56",
        "description": "Used with Inventory functions and specifies inventory items of SETTING type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_SOUND",
        "type": "integer",
        "value": "1",
        "description": "Used with Inventory functions and specifies inventory items of SOUND type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_TEXTURE",
        "type": "integer",
        "value": "0",
        "description": "Used with Inventory functions and specifies inventory items of TEXTURE type will be retrieved by the function."
    },
    {
        "name": "JSON_APPEND",
        "type": "integer",
        "value": "-1",
        "description": "A special specifier for llJsonSetValue which indicates the given value should be appended to the array at the specified level.\nCare should be taken, as if the value at that level is not an array, the existing data will be overwritten and replaced with the array meant for appending."
    },
    {
        "name": "JSON_ARRAY",
        "type": "string",
        "value": "\"﷒\"",
        "description": "Used with the llList2Json function to indicate that the provided list (which may be empty) is to be used to encode and return a string serialization of a Json array.\n\nAlso a possible return value for the llJsonValueType function that indicates the Json data type of at the specifier location within a given Json text is, in fact, a Json array."
    },
    {
        "name": "JSON_DELETE",
        "type": "string",
        "value": "\"�\"",
        "description": "A constant used to delete a value within a JSON text string."
    },
    {
        "name": "JSON_FALSE",
        "type": "string",
        "value": "\"�\"",
        "description": "Return value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object.\n\nAlso used to set the bare word 'false' as a Value within a Json text using llJsonSetValue and llList2Json."
    },
    {
        "name": "JSON_INVALID",
        "type": "string",
        "value": "\"﷐\"",
        "description": "A return value that indicates an invalid 'type' was specified to the llList2Json function.\nAlso a return value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object.\n\nAlso a return value for llJsonGetValue to signify a specifier list attempting to access a nonexistent location within a Json text (see Examples)."
    },
    {
        "name": "JSON_NULL",
        "type": "string",
        "value": "\"�\"",
        "description": "Return value for llJsonValueType function indicating the Json data type of a given address specifier in a given string-serialized JSON text.\n\nAlso the return string value for llJsonGetValue function when the bare word 'null' is at the given address specifier in a given string-serialized JSON text.\n\nAlso used to encode the bare word 'null' within a Json text to signify an empty, valueless placeholder Value at that location (the empty LSL String, \"\", can be used as well for that)."
    },
    {
        "name": "JSON_NUMBER",
        "type": "string",
        "value": "\"�\"",
        "description": "Return value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object."
    },
    {
        "name": "JSON_OBJECT",
        "type": "string",
        "value": "\"﷑\"",
        "description": "Used with the llList2Json function to indicate that the list provided is a strided list of \"Key\", Value pairs (which may be empty), and that a string representing a Json object will be returned.\n\nAlso a possible return value for the llJsonValueType function that indicates the Json data type of at the specifier location within a given Json text is, in fact, a JSON_OBJECT."
    },
    {
        "name": "JSON_STRING",
        "type": "string",
        "value": "\"�\"",
        "description": "Return value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object."
    },
    {
        "name": "JSON_TRUE",
        "type": "string",
        "value": "\"�\"",
        "description": "Return value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object.\n\nAlso used to set the bare word 'true' as a Value within a JSON text using llJsonSetValue and llList2Json."
    },
    {
        "name": "KFM_CMD_PAUSE",
        "type": "integer",
        "value": "2",
        "description": "Command used in the options parameter llSetKeyframedMotion .Stops the animation but doesn t reset it at the start of motion."
    },
    {
        "name": "KFM_CMD_PLAY",
        "type": "integer",
        "value": "0",
        "description": "Command used in the options parameter llSetKeyframedMotion .Resumes the animation previously stopped by KFM_CMD_STOP or KFM_CMD_PAUSE"
    },
    {
        "name": "KFM_CMD_STOP",
        "type": "integer",
        "value": "1",
        "description": "Command used in the options parameter llSetKeyframedMotion .Stops the animation and resets it at the start of motion."
    },
    {
        "name": "KFM_COMMAND",
        "type": "integer",
        "value": "0",
        "description": "Command used in the options parameter of llSetKeyframedMotion. followed by one of: KFM_CMD_STOP, KFM_CMD_PLAY, KFM_CMD_PAUSE to play, stop or pause the motion."
    },
    {
        "name": "KFM_DATA",
        "type": "integer",
        "value": "2",
        "description": "Flag used in the options parameter llSetKeyframedMotion : is a flag followed by a bitwise combination of: KFM_TRANSLATION and KFM_ROTATION. If absent, both rotations and translations must be provided in the first parameter of llSetKeyframedMotion."
    },
    {
        "name": "KFM_FORWARD",
        "type": "integer",
        "value": "0",
        "description": "Specify the playback mode used in llSetKeyframedMotion . It s the default playback mode . It plays the frames in this order frame1, frame2 .. frame N And stops after"
    },
    {
        "name": "KFM_LOOP",
        "type": "integer",
        "value": "1",
        "description": "specify the playback mode used in llSetKeyframedMotion : will play the frames in the order  number 1 , number 2 ... number N , returns to the intitial position , plays number 1 , nummber 2 .."
    },
    {
        "name": "KFM_MODE",
        "type": "integer",
        "value": "1",
        "description": "Used in llSetKeyframedMotion. followed by one of: KFM_LOOP, KFM_REVERSE, KFM_FORWARD, or KFM_PING_PONG will specify the playback mode. Defaults to KFM_FORWARD. Must be specified when the keyframe list is provided."
    },
    {
        "name": "KFM_PING_PONG",
        "type": "integer",
        "value": "2",
        "description": "Specify the playback mode used in llSetKeyframedMotion"
    },
    {
        "name": "KFM_REVERSE",
        "type": "integer",
        "value": "3",
        "description": "Specify the playback mode used in llSetKeyframedMotion .  It plays the frames in this order frameN, frameN-1 .. frame 2 , frame 1 . And stops after"
    },
    {
        "name": "KFM_ROTATION",
        "type": "integer",
        "value": "0x1",
        "description": "Specifies the type of data in the list of moves for llSetKeyframedMotion"
    },
    {
        "name": "KFM_TRANSLATION",
        "type": "integer",
        "value": "0x2",
        "description": "Specifies the type of data in the list of moves for the function llSetKeyframedMotion"
    },
    {
        "name": "LAND_LEVEL",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "LAND_LOWER",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "LAND_NOISE",
        "type": "integer",
        "value": "4",
        "description": "Randomize the land - makes it rough"
    },
    {
        "name": "LAND_RAISE",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "LAND_REVERT",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "LAND_SMOOTH",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "LINK_ALL_CHILDREN",
        "type": "integer",
        "value": "-3",
        "description": ""
    },
    {
        "name": "LINK_ALL_OTHERS",
        "type": "integer",
        "value": "-2",
        "description": "This does the opposite of LINK_THIS"
    },
    {
        "name": "LINK_ROOT",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "LINK_SET",
        "type": "integer",
        "value": "-1",
        "description": ""
    },
    {
        "name": "LINK_THIS",
        "type": "integer",
        "value": "-4",
        "description": "Causes the script to act only upon the prim the script is in. \n\nThe opposite flag of this is LINK_ALL_OTHERS."
    },
    {
        "name": "LIST_STAT_GEOMETRIC_MEAN",
        "type": "integer",
        "value": "9",
        "description": "Returns the geometric mean of a list of numbers.\n<source lang"
    },
    {
        "name": "LIST_STAT_MAX",
        "type": "integer",
        "value": "2",
        "description": "Retrieves the largest number in the list."
    },
    {
        "name": "LIST_STAT_MEAN",
        "type": "integer",
        "value": "3",
        "description": "Calculates the mean (average) of the numbers in the list."
    },
    {
        "name": "LIST_STAT_MEDIAN",
        "type": "integer",
        "value": "4",
        "description": "Calculates the median number in the list.\n<source lang"
    },
    {
        "name": "LIST_STAT_MIN",
        "type": "integer",
        "value": "1",
        "description": "Retrieves the smallest number in the list."
    },
    {
        "name": "LIST_STAT_NUM_COUNT",
        "type": "integer",
        "value": "8",
        "description": "Retrieves the number of float and integer elements."
    },
    {
        "name": "LIST_STAT_RANGE",
        "type": "integer",
        "value": "0",
        "description": "Calculates the range of the list. (max - min)"
    },
    {
        "name": "LIST_STAT_STD_DEV",
        "type": "integer",
        "value": "5",
        "description": "Calculates the sample standard deviation of a list of numbers.\n<source lang"
    },
    {
        "name": "LIST_STAT_SUM",
        "type": "integer",
        "value": "6",
        "description": "Calculates the sum of the numbers in a list."
    },
    {
        "name": "LIST_STAT_SUM_SQUARES",
        "type": "integer",
        "value": "7",
        "description": "Calculates the sum of the squares of the numbers in a list.\n<source lang"
    },
    {
        "name": "LOOP",
        "type": "integer",
        "value": "0x02",
        "description": ""
    },
    {
        "name": "MASK_BASE",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "MASK_EVERYONE",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "MASK_GROUP",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "MASK_NEXT",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "MASK_OWNER",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "NULL_KEY",
        "type": "string",
        "value": "\"00000000-0000-0000-0000-000000000000\"",
        "description": "NULL_KEY is a string. However it is only really useful as a key.\n\nDespite fitting the syntax criteria to be a valid key, when fed to a Conditional as a key it executes as FALSE."
    },
    {
        "name": "OBJECT_ATTACHED_POINT",
        "type": "integer",
        "value": "19",
        "description": "Used with llGetObjectDetails, returns the value llGetAttached would return."
    },
    {
        "name": "OBJECT_ATTACHED_SLOTS_AVAILABLE",
        "type": "integer",
        "value": "35",
        "description": "This is a flag used with llGetObjectDetails to gets the avatar's available attachment slot count.\n\nIf id is not an avatar, 0.0 is returned."
    },
    {
        "name": "OBJECT_BODY_SHAPE_TYPE",
        "type": "integer",
        "value": "26",
        "description": "This is a flag used with llGetObjectDetails to get the \"gender\" setting of an avatar's currently worn shape.\n\nIf id is not an avatar, -1.0 is returned.\n\nNormal operational values are in the range. 0.0 is standard female setting, 1.0 is standard male setting. Intermediate values with visible differences are possible with manually crafted shapes.\n\nNote that this value ''only'' reflects the currently worn shape. The avatar itself has no defined gender, and no information is available about the the avatar's human operator."
    },
    {
        "name": "OBJECT_CHARACTER_TIME",
        "type": "integer",
        "value": "17",
        "description": "This is a flag used with llGetObjectDetails to get the average CPU time (in seconds) used by the object for navigation, if the object is a pathfinding character. See Viewerhelp:Pathfinding_characters"
    },
    {
        "name": "OBJECT_CLICK_ACTION",
        "type": "integer",
        "value": "28",
        "description": "This is a flag used with llGetObjectDetails to get the prim Click Action."
    },
    {
        "name": "OBJECT_CREATOR",
        "type": "integer",
        "value": "8",
        "description": "This is a flag used with llGetObjectDetails to get the object creator key."
    },
    {
        "name": "OBJECT_DESC",
        "type": "integer",
        "value": "2",
        "description": "This is a flag used with llGetObjectDetails to get the object description."
    },
    {
        "name": "OBJECT_GROUP",
        "type": "integer",
        "value": "7",
        "description": "This is a flag used with llGetObjectDetails to get the object group key."
    },
    {
        "name": "OBJECT_GROUP_TAG",
        "type": "integer",
        "value": "33",
        "description": "This is a flag used with llGetObjectDetails to get the active group tag/title of the avatar defined in key."
    },
    {
        "name": "OBJECT_HOVER_HEIGHT",
        "type": "integer",
        "value": "25",
        "description": "This is a flag used with hover height of the avatar.\n\nIf id is not an avatar, 0.0 is returned. Normal values are in the range  with a default of 0.0.\n\nThis value does ''not'' reflect the avatar shape's \"Hover\" slider, only the dynamic viewer setting (right-click on your avatar and pick \"Hover Height\")."
    },
    {
        "name": "OBJECT_LAST_OWNER_ID",
        "type": "integer",
        "value": "27",
        "description": "This is a flag used with llGetObjectDetails to get the last object owner key (if known).\n\n* For group-owned objects, this is the avatar that deeded the object.\n* Returns NULL_KEY for avatars, or objects that were never transferred.\n* A rezzed object taken back to inventory, then re-rezzed, will return its current owner key."
    },
    {
        "name": "OBJECT_NAME",
        "type": "integer",
        "value": "1",
        "description": "This is a flag used with llGetObjectDetails to get the object name."
    },
    {
        "name": "OBJECT_OMEGA",
        "type": "integer",
        "value": "29",
        "description": "Used with llGetObjectDetails to get the objects rotational velocity."
    },
    {
        "name": "OBJECT_OWNER",
        "type": "integer",
        "value": "6",
        "description": "This is a flag used with llGetObjectDetails to get the object owner key."
    },
    {
        "name": "OBJECT_PATHFINDING_TYPE",
        "type": "integer",
        "value": "20",
        "description": ""
    },
    {
        "name": "OBJECT_PHANTOM",
        "type": "integer",
        "value": "22",
        "description": "This is a flag used with llGetObjectDetails to get the object's phantom attribute.\n\nIf the object being queried is an Avatar or Attachment,  is returned."
    },
    {
        "name": "OBJECT_PHYSICS",
        "type": "integer",
        "value": "21",
        "description": "This is a flag used with llGetObjectDetails to get the object's physics attribute.\n\nIf the object being queried is an Avatar or Attachment,  is returned."
    },
    {
        "name": "OBJECT_PHYSICS_COST",
        "type": "integer",
        "value": "16",
        "description": "This is a flag used with llGetObjectDetails to get the physics cost of the object."
    },
    {
        "name": "OBJECT_POS",
        "type": "integer",
        "value": "3",
        "description": "This is a flag used with llGetObjectDetails to get the object position."
    },
    {
        "name": "OBJECT_PRIM_COUNT",
        "type": "integer",
        "value": "30",
        "description": "This is a flag used with llGetObjectDetails to get the object's prim count."
    },
    {
        "name": "OBJECT_PRIM_EQUIVALENCE",
        "type": "integer",
        "value": "13",
        "description": "This is a flag used with llGetObjectDetails to get the prim equivalence of the object."
    },
    {
        "name": "OBJECT_RENDER_WEIGHT",
        "type": "integer",
        "value": "24",
        "description": "This is a flag used with llGetObjectDetails to get the Avatar_Rendering_Cost of an avatar, based on values reported by nearby viewers.  If no data is available, -1 is returned.  The maximum render weight stored by the simulator is 500000.  When called against an object, 0 is returned."
    },
    {
        "name": "OBJECT_RETURN_PARCEL",
        "type": "integer",
        "value": "1",
        "description": "For llReturnObjectsByOwner, sets the scope to return all objects on the same parcel as the script which are owned by 'owner'. The script must be owned by an estate manager or over a parcel owned by the owner of the script."
    },
    {
        "name": "OBJECT_RETURN_PARCEL_OWNER",
        "type": "integer",
        "value": "2",
        "description": "For llReturnObjectsByOwner, sets the scope to return all objects owned by 'owner' which are over parcels owned by the owner of the script."
    },
    {
        "name": "OBJECT_RETURN_REGION",
        "type": "integer",
        "value": "4",
        "description": "For llReturnObjectsByOwner, sets the scope to return all objects in the region owned by 'owner' - only works when the script is owned by the estate owner or an estate manager."
    },
    {
        "name": "OBJECT_ROOT",
        "type": "integer",
        "value": "18",
        "description": ""
    },
    {
        "name": "OBJECT_ROT",
        "type": "integer",
        "value": "4",
        "description": "This is a flag used with llGetObjectDetails to get the object rotation."
    },
    {
        "name": "OBJECT_RUNNING_SCRIPT_COUNT",
        "type": "integer",
        "value": "9",
        "description": "This is a flag used with llGetObjectDetails to get the number of running scripts."
    },
    {
        "name": "OBJECT_SCRIPT_MEMORY",
        "type": "integer",
        "value": "11",
        "description": "This is a flag used with llGetObjectDetails to get the amount of allocated memory in bytes.\n\nThis reports the maximum memory that all scripts in an object could use, not the actual amount of real memory currently used.  In particular, Mono scripts only use the amount of memory currently needed, not the maximum possible.  In practice, this makes the number reported a worst case scenario that will never normally be reached by most objects."
    },
    {
        "name": "OBJECT_SCRIPT_TIME",
        "type": "integer",
        "value": "12",
        "description": "This is a flag used with llGetObjectDetails to get the average CPU time (in seconds) used by scripts in an object or agent. Like top scripts, the time reported is the average script time per frame for the last 30 minutes for all scripts on the object. If the object has been in the region for less than 30 minutes, the number reported will be the average time per frame since the object entered the region."
    },
    {
        "name": "OBJECT_SELECT_COUNT",
        "type": "integer",
        "value": "37",
        "description": "This is a flag used with llGetObjectDetails to get the total number of agents selecting any links in the object.\n\nIf id is an avatar, 0 is returned.\n"
    },
    {
        "name": "OBJECT_SERVER_COST",
        "type": "integer",
        "value": "14",
        "description": "This is a flag used with llGetObjectDetails to get the http://wiki.secondlife.com/wiki/Mesh/Mesh_Server_Weight object cost] of the object."
    },
    {
        "name": "OBJECT_STREAMING_COST",
        "type": "integer",
        "value": "15",
        "description": "This is a flag used with llGetObjectDetails to get the streaming/download cost of the object."
    },
    {
        "name": "OBJECT_TEMP_ON_REZ",
        "type": "integer",
        "value": "23",
        "description": "This is a flag used with llGetObjectDetails to get the object's temporary attribute."
    },
    {
        "name": "OBJECT_TOTAL_INVENTORY_COUNT",
        "type": "integer",
        "value": "31",
        "description": "This is a flag used with inventory items."
    },
    {
        "name": "OBJECT_TOTAL_SCRIPT_COUNT",
        "type": "integer",
        "value": "10",
        "description": "This is a flag used with llGetObjectDetails to get the total number of scripts, running or not."
    },
    {
        "name": "OBJECT_UNKNOWN_DETAIL",
        "type": "integer",
        "value": "-1",
        "description": "This is a flag returned by llGetObjectDetails when it is passed an invalid flag."
    },
    {
        "name": "OBJECT_VELOCITY",
        "type": "integer",
        "value": "5",
        "description": "This is a flag used with llGetObjectDetails to get the object velocity."
    },
    {
        "name": "OPT_AVATAR",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "OPT_CHARACTER",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "OPT_EXCLUSION_VOLUME",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "OPT_LEGACY_LINKSET",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "OPT_MATERIAL_VOLUME",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "OPT_OTHER",
        "type": "integer",
        "value": "-1",
        "description": ""
    },
    {
        "name": "OPT_STATIC_OBSTACLE",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "OPT_WALKABLE",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "PARCEL_COUNT_GROUP",
        "type": "integer",
        "value": "2",
        "description": "Used with llGetParcelPrimCount to get the total land impact of objects shared with or owned by the parcel group."
    },
    {
        "name": "PARCEL_COUNT_OTHER",
        "type": "integer",
        "value": "3",
        "description": "Used with llGetParcelPrimCount to get the land impact of all objects that are not owned by the parcel owner or shared with or owned by the group."
    },
    {
        "name": "PARCEL_COUNT_OWNER",
        "type": "integer",
        "value": "1",
        "description": "Used with llGetParcelPrimCount to get the total land impact of objects owned by the parcel owner."
    },
    {
        "name": "PARCEL_COUNT_SELECTED",
        "type": "integer",
        "value": "4",
        "description": "Used with llGetParcelPrimCount to get the total land impact of all objects selected or Sit on."
    },
    {
        "name": "PARCEL_COUNT_TEMP",
        "type": "integer",
        "value": "5",
        "description": "Used with llGetParcelPrimCount to get the total land impact of Temporary objects."
    },
    {
        "name": "PARCEL_COUNT_TOTAL",
        "type": "integer",
        "value": "0",
        "description": "Used with llGetParcelPrimCount to return total object land impact used on the parcel(s). Does not include Temporary objects."
    },
    {
        "name": "PARCEL_DETAILS_AREA",
        "type": "integer",
        "value": "4",
        "description": "This is a flag used with llGetParcelDetails to get the parcel size in sqm (m2)."
    },
    {
        "name": "PARCEL_DETAILS_DESC",
        "type": "integer",
        "value": "1",
        "description": "This is a flag used with llGetParcelDetails to get the parcel description."
    },
    {
        "name": "PARCEL_DETAILS_FLAGS",
        "type": "integer",
        "value": "12",
        "description": "Used with llGetParcelDetails, see llGetParcelFlags for the meaning of the returned flags."
    },
    {
        "name": "PARCEL_DETAILS_GROUP",
        "type": "integer",
        "value": "3",
        "description": "This is a flag used with llGetParcelDetails to get the group key of the parcel."
    },
    {
        "name": "PARCEL_DETAILS_ID",
        "type": "integer",
        "value": "5",
        "description": "This is a flag used with llGetParcelDetails to get the parcel UUID."
    },
    {
        "name": "PARCEL_DETAILS_NAME",
        "type": "integer",
        "value": "0",
        "description": "This is a flag used with llGetParcelDetails to get the parcel name."
    },
    {
        "name": "PARCEL_DETAILS_OWNER",
        "type": "integer",
        "value": "2",
        "description": "This is a flag used with llGetParcelDetails to get the parcel owner key."
    },
    {
        "name": "PARCEL_DETAILS_SEE_AVATARS",
        "type": "integer",
        "value": "6",
        "description": "This is a flag used with llGetParcelDetails to get the \"See and chat with residents on this parcel\" setting."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_ALL_OBJECT_ENTRY",
        "type": "integer",
        "value": "0x8000000",
        "description": "This is a flag used with llGetParcelFlags to check if objects are allowed to enter the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_CREATE_GROUP_OBJECTS",
        "type": "integer",
        "value": "0x4000000",
        "description": "This is a flag used with llGetParcelFlags to check if scripts in group deeded objects are allowed to rez new objects in the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_CREATE_OBJECTS",
        "type": "integer",
        "value": "0x40",
        "description": "This is a flag used with llGetParcelFlags to check if anyone can create objects on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_DAMAGE",
        "type": "integer",
        "value": "0x20",
        "description": "This is a flag used with llGetParcelFlags to check if damage is enabled on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_FLY",
        "type": "integer",
        "value": "0x1",
        "description": "This is a flag used with llGetParcelFlags to check if flying is allowed on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_GROUP_OBJECT_ENTRY",
        "type": "integer",
        "value": "0x10000000",
        "description": "This is a flag used with llGetParcelFlags to check if group deeded objects are allowed to enter the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_GROUP_SCRIPTS",
        "type": "integer",
        "value": "0x2000000",
        "description": "This is a flag used with llGetParcelFlags to check if scripts in group deeded objects are allowed to run in the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_LANDMARK",
        "type": "integer",
        "value": "0x8",
        "description": "This is a flag used with llGetParcelFlags to check if creating landmarks is allowed on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_SCRIPTS",
        "type": "integer",
        "value": "0x2",
        "description": "This is a flag used with llGetParcelFlags to check if scripts are allowed to run on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_TERRAFORM",
        "type": "integer",
        "value": "0x10",
        "description": "This is a flag used with llGetParcelFlags to check if anyone is allowed to terraform the parcel."
    },
    {
        "name": "PARCEL_FLAG_LOCAL_SOUND_ONLY",
        "type": "integer",
        "value": "0x8000",
        "description": "This is a flag used with llGetParcelFlags to check if the parcel allows sound originating from outside of the parcel to be heard inside the parcel."
    },
    {
        "name": "PARCEL_FLAG_RESTRICT_PUSHOBJECT",
        "type": "integer",
        "value": "0x200000",
        "description": "This is a flag used with llGetParcelFlags to check if llPushObject is allowed to be used by non-owners (or non-group officers if group owned land) inside the parcel."
    },
    {
        "name": "PARCEL_FLAG_USE_ACCESS_GROUP",
        "type": "integer",
        "value": "0x100",
        "description": "This is a flag used with llGetParcelFlags to check if the parcel has access restricted to a group."
    },
    {
        "name": "PARCEL_FLAG_USE_ACCESS_LIST",
        "type": "integer",
        "value": "0x200",
        "description": "This is a flag used with llGetParcelFlags to check if the parcel has access restricted to a list of avatars."
    },
    {
        "name": "PARCEL_FLAG_USE_BAN_LIST",
        "type": "integer",
        "value": "0x400",
        "description": "This is a flag used with llGetParcelFlags to check if the parcel has access restricted with a ban list of avatars."
    },
    {
        "name": "PARCEL_FLAG_USE_LAND_PASS_LIST",
        "type": "integer",
        "value": "0x800",
        "description": "This is a flag used with llGetParcelFlags to check if the parcel has access restricted with a land-pass list of avatars.\nLand Passes are sold for L$."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_AGENT",
        "type": "integer",
        "value": "7",
        "description": "Applies the media command to the specified agent only."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_AUTO_ALIGN",
        "type": "integer",
        "value": "9",
        "description": "Sets the parcel option 'Auto scale content'."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_DESC",
        "type": "integer",
        "value": "12",
        "description": "Use this to get or set the parcel media description."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_LOOP",
        "type": "integer",
        "value": "3",
        "description": "Start the media stream playing from the current frame. When the end is reached, loop to the beginning and continue."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_LOOP_SET",
        "type": "integer",
        "value": "13",
        "description": "Use this to get or set the parcel's media loop duration. It may not be functional. See  for detail."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_PAUSE",
        "type": "integer",
        "value": "1",
        "description": "Pause the media stream (stop playing but stay on current frame)."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_PLAY",
        "type": "integer",
        "value": "2",
        "description": "Start the media stream playing from the current frame and stop when the end is reached."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_SIZE",
        "type": "integer",
        "value": "11",
        "description": "Use this to get or set the parcel media pixel resolution."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_STOP",
        "type": "integer",
        "value": "0",
        "description": "Stop the media stream and go back to the first frame."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_TEXTURE",
        "type": "integer",
        "value": "4",
        "description": "Use this to get or set the parcel's media texture."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_TIME",
        "type": "integer",
        "value": "6",
        "description": "Move a media stream to a specific time in (floating point) seconds."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_TYPE",
        "type": "integer",
        "value": "10",
        "description": "Use this to get or set the parcel media MIME type (e.g. \"text/html\")."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_UNLOAD",
        "type": "integer",
        "value": "8",
        "description": "Completely unloads the movie and restores the original texture."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_URL",
        "type": "integer",
        "value": "5",
        "description": "Used to get or set the parcel's media url."
    },
    {
        "name": "PASS_ALWAYS",
        "type": "integer",
        "value": "1",
        "description": "The applicable event group will always be triggered in the the root prim. Whether or not is handled in the child prim is irrelevant."
    },
    {
        "name": "PASS_IF_NOT_HANDLED",
        "type": "integer",
        "value": "0",
        "description": "The applicable event group will be triggered in the the root prim if it is not handled in this child prim."
    },
    {
        "name": "PASS_NEVER",
        "type": "integer",
        "value": "2",
        "description": "The applicable event group will never be triggered in the the root prim. Whether or not is handled in the child prim is irrelevant."
    },
    {
        "name": "PASSIVE",
        "type": "integer",
        "value": "0x4",
        "description": "If it is contained in the result of llDetectedType(), it means it is non-physical objects.\n\nIf it is used as an filter of llSensor() or llSensorRepeat(), it will search for non-scripted or script is inactive and non-physical or, if physical, not moving. Thus, it is not using SL server resources now."
    },
    {
        "name": "PATROL_PAUSE_AT_WAYPOINTS",
        "type": "integer",
        "value": "0",
        "description": "Option parameter for llPatrolPoints function.  Can be set TRUE or FALSE (the default).\nWhen set TRUE, characters will slow down and momentarily pause at each waypoint.\nWhen set FALSE, characters will continue to move to the next waypoint at full speed, with no pause."
    },
    {
        "name": "PAY_DEFAULT",
        "type": "integer",
        "value": "-2",
        "description": "Uses the default value for a pay button."
    },
    {
        "name": "PAY_HIDE",
        "type": "integer",
        "value": "-1",
        "description": "Hides a pay button completely."
    },
    {
        "name": "PAYMENT_INFO_ON_FILE",
        "type": "integer",
        "value": "0x1",
        "description": "If payment info is on file."
    },
    {
        "name": "PAYMENT_INFO_USED",
        "type": "integer",
        "value": "0x2",
        "description": "If payment info has been used."
    },
    {
        "name": "PERM_ALL",
        "type": "integer",
        "value": "0x7FFFFFFF",
        "description": ""
    },
    {
        "name": "PERM_COPY",
        "type": "integer",
        "value": "0x00008000",
        "description": ""
    },
    {
        "name": "PERM_MODIFY",
        "type": "integer",
        "value": "0x00004000",
        "description": ""
    },
    {
        "name": "PERM_MOVE",
        "type": "integer",
        "value": "0x00080000",
        "description": ""
    },
    {
        "name": "PERM_TRANSFER",
        "type": "integer",
        "value": "0x00002000",
        "description": ""
    },
    {
        "name": "PERMISSION_ATTACH",
        "type": "integer",
        "value": "0x20",
        "description": ""
    },
    {
        "name": "PERMISSION_CHANGE_LINKS",
        "type": "integer",
        "value": "0x80",
        "description": ""
    },
    {
        "name": "PERMISSION_CONTROL_CAMERA",
        "type": "integer",
        "value": "0x800",
        "description": ""
    },
    {
        "name": "PERMISSION_DEBIT",
        "type": "integer",
        "value": "0x2",
        "description": ""
    },
    {
        "name": "PERMISSION_OVERRIDE_ANIMATIONS",
        "type": "integer",
        "value": "0x8000",
        "description": ""
    },
    {
        "name": "PERMISSION_RETURN_OBJECTS",
        "type": "integer",
        "value": "65536",
        "description": "Required Permission to use the llReturnObject* functions."
    },
    {
        "name": "PERMISSION_SILENT_ESTATE_MANAGEMENT",
        "type": "integer",
        "value": "0x4000",
        "description": "A script with this permission does not notify the object owner when it modifies estate access rules via llManageEstateAccess."
    },
    {
        "name": "PERMISSION_TAKE_CONTROLS",
        "type": "integer",
        "value": "0x4",
        "description": ""
    },
    {
        "name": "PERMISSION_TELEPORT",
        "type": "integer",
        "value": "0x1000",
        "description": "Permission required to use llTeleportAgent."
    },
    {
        "name": "PERMISSION_TRACK_CAMERA",
        "type": "integer",
        "value": "0x400",
        "description": ""
    },
    {
        "name": "PERMISSION_TRIGGER_ANIMATION",
        "type": "integer",
        "value": "0x10",
        "description": ""
    },
    {
        "name": "PI",
        "type": "float",
        "value": "3.1415926535897932384626433832795f",
        "description": ""
    },
    {
        "name": "PI_BY_TWO",
        "type": "float",
        "value": "1.5707963267948966192313216916398f",
        "description": ""
    },
    {
        "name": "PING_PONG",
        "type": "integer",
        "value": "0x08",
        "description": ""
    },
    {
        "name": "PRIM_ALLOW_UNSIT",
        "type": "integer",
        "value": "3",
        "description": "When set on a prim that is running a script as part of an experience an avatar that is seated on the sit target and has agreed to participate in the experience will be unable to stand or select another prim to sit on.  The restriction remains in place until one of the following conditions is met:\n* PRIM_ALLOW_UNSIT is changed to TRUE\n* llUnSit( ) is called forcing the avatar to stand.\n* llSitOnLink( ) is called moving this avatar to a new sit target. \n* The avatar teleports or is teleported by the experience.\n* The agent signs off.\n* The agent disables the experience.\n* The prim the avatar is seated on is destroyed.\n* The agent is unseated for any reason.\n\nThis flag has no effect if encountered outside a valid experience. \n\nIf the linkset moves to a region that has not enabled the experience this value will be ignored and standing will behave as normal, without restriction.  If the linkset moves to a parcel that the avatar does not have access to, the avatar will be forced to stand and the unsit restriction will be removed.\n"
    },
    {
        "name": "PRIM_ALPHA_MODE",
        "type": "integer",
        "value": "38",
        "description": "Used to specify how the alpha channel of the diffuse texture should affect rendering of a prim’s face."
    },
    {
        "name": "PRIM_ALPHA_MODE_BLEND",
        "type": "integer",
        "value": "1",
        "description": "Used with PRIM_ALPHA_MODE. Prims faces set to this type use alpha blending for diffuse texture rendering (assuming the alpha channel exists)."
    },
    {
        "name": "PRIM_ALPHA_MODE_EMISSIVE",
        "type": "integer",
        "value": "3",
        "description": "Used with PRIM_ALPHA_MODE. Prims faces set to this type render with an emissivity corresponding to the opacity of each pixel of the diffuse texture.  The more opaque a pixel is, the brighter it renders under all lighting conditions.  A fully-opaque pixel will effectively render as 'full bright'."
    },
    {
        "name": "PRIM_ALPHA_MODE_MASK",
        "type": "integer",
        "value": "2",
        "description": "Used with PRIM_ALPHA_MODE. Prims faces set to this type render as either completely opaque or completely transparent on a per-pixel basis.  Pixels which are less opaque than the specified mask_cutoff are rendered as completely transparent, and the rest are rendered as fully opaque."
    },
    {
        "name": "PRIM_ALPHA_MODE_NONE",
        "type": "integer",
        "value": "0",
        "description": "Used with PRIM_ALPHA_MODE. Prims faces set to this type ignore the alpha channel of the diffuse texture, and render as completely opaque."
    },
    {
        "name": "PRIM_BUMP_BARK",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_BLOBS",
        "type": "integer",
        "value": "12",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_BRICKS",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_BRIGHT",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_CHECKER",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_CONCRETE",
        "type": "integer",
        "value": "7",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_DARK",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_DISKS",
        "type": "integer",
        "value": "10",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_GRAVEL",
        "type": "integer",
        "value": "11",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_LARGETILE",
        "type": "integer",
        "value": "14",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_NONE",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_SHINY",
        "type": "integer",
        "value": "19",
        "description": "Used to get or set the Bump Mapping and shiny settings of the prim's face.\nbumpshiny"
    },
    {
        "name": "PRIM_BUMP_SIDING",
        "type": "integer",
        "value": "13",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_STONE",
        "type": "integer",
        "value": "9",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_STUCCO",
        "type": "integer",
        "value": "15",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_SUCTION",
        "type": "integer",
        "value": "16",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_TILE",
        "type": "integer",
        "value": "8",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_WEAVE",
        "type": "integer",
        "value": "17",
        "description": ""
    },
    {
        "name": "PRIM_BUMP_WOOD",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "PRIM_COLOR",
        "type": "integer",
        "value": "18",
        "description": "Used to get or set the color and alpha of a prim's face."
    },
    {
        "name": "PRIM_DESC",
        "type": "integer",
        "value": "28",
        "description": "Used to get or set the prim's description."
    },
    {
        "name": "PRIM_FLEXIBLE",
        "type": "integer",
        "value": "21",
        "description": "Used to get or set the prim's flexible configuration."
    },
    {
        "name": "PRIM_FULLBRIGHT",
        "type": "integer",
        "value": "20",
        "description": "Used to get or set the full-bright setting of a prim's face."
    },
    {
        "name": "PRIM_GLOW",
        "type": "integer",
        "value": "25",
        "description": "PRIM_GLOW is used to get or set the glow status of the face. Use the integer number 25 if the compiler rejects the named constant."
    },
    {
        "name": "PRIM_HOLE_CIRCLE",
        "type": "integer",
        "value": "0x10",
        "description": "Used with certain PRIM_TYPE_* flags to make a circular hole, via the hole_shape parameter."
    },
    {
        "name": "PRIM_HOLE_DEFAULT",
        "type": "integer",
        "value": "0x00",
        "description": "Used with certain PRIM_TYPE_* flags to make a hole the same shape as the outer shape, via the hole_shape parameter."
    },
    {
        "name": "PRIM_HOLE_SQUARE",
        "type": "integer",
        "value": "0x20",
        "description": "Used with certain PRIM_TYPE_* flags to make a squarish hole, via the hole_shape parameter."
    },
    {
        "name": "PRIM_HOLE_TRIANGLE",
        "type": "integer",
        "value": "0x30",
        "description": "Used with certain PRIM_TYPE_* flags to make a triangular hole, via the hole_shape parameter."
    },
    {
        "name": "PRIM_LINK_TARGET",
        "type": "integer",
        "value": "34",
        "description": "Used to get or set multiple links with a single PrimParameters call."
    },
    {
        "name": "PRIM_MATERIAL",
        "type": "integer",
        "value": "2",
        "description": "Sets the prim material. Material does not affect mass, but does affect friction, bounce (elasticity), and collision sound. On a wood incline of 33 degrees, the example script below gave the following results:\n\n class"
    },
    {
        "name": "PRIM_MATERIAL_FLESH",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "PRIM_MATERIAL_GLASS",
        "type": "integer",
        "value": "2",
        "description": "Very low friction"
    },
    {
        "name": "PRIM_MATERIAL_LIGHT",
        "type": "integer",
        "value": "7",
        "description": "This constant and it's underlying functionality is deprecated.\n Light is no longer a prim property, it is now a face property. The same functionality is reproduced with [ PRIM_FULLBRIGHT, ALL_SIDES, TRUE ]."
    },
    {
        "name": "PRIM_MATERIAL_METAL",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "PRIM_MATERIAL_PLASTIC",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "PRIM_MATERIAL_RUBBER",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "PRIM_MATERIAL_STONE",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "PRIM_MATERIAL_WOOD",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_ALT_IMAGE_ENABLE",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_AUTO_LOOP",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_AUTO_PLAY",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_AUTO_SCALE",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_AUTO_ZOOM",
        "type": "integer",
        "value": "7",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_CURRENT_URL",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_FIRST_CLICK_INTERACT",
        "type": "integer",
        "value": "8",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_HEIGHT_PIXELS",
        "type": "integer",
        "value": "10",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_HOME_URL",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_PERM_ANYONE",
        "type": "integer",
        "value": "0x4",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_PERM_GROUP",
        "type": "integer",
        "value": "0x2",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_PERM_NONE",
        "type": "integer",
        "value": "0x0",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_PERM_OWNER",
        "type": "integer",
        "value": "0x1",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_PERMS_CONTROL",
        "type": "integer",
        "value": "14",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_PERMS_INTERACT",
        "type": "integer",
        "value": "13",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_WHITELIST",
        "type": "integer",
        "value": "12",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_WHITELIST_ENABLE",
        "type": "integer",
        "value": "11",
        "description": ""
    },
    {
        "name": "PRIM_MEDIA_WIDTH_PIXELS",
        "type": "integer",
        "value": "9",
        "description": ""
    },
    {
        "name": "PRIM_NAME",
        "type": "integer",
        "value": "27",
        "description": "Used to get or set the prim's name."
    },
    {
        "name": "PRIM_NORMAL",
        "type": "integer",
        "value": "37",
        "description": "Used to get or set the normal map texture settings of a prim's face."
    },
    {
        "name": "PRIM_OMEGA",
        "type": "integer",
        "value": "32",
        "description": "Used to make the object spin at the specified axis and rate, or retrieve spin settings. See llTargetOmega for specification."
    },
    {
        "name": "PRIM_PHANTOM",
        "type": "integer",
        "value": "5",
        "description": "Used to get or set the object's phantom Status."
    },
    {
        "name": "PRIM_PHYSICS",
        "type": "integer",
        "value": "3",
        "description": "Used to get or set the object's physics Status. When enabled the object responds to SL physics."
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_CONVEX",
        "type": "integer",
        "value": "2",
        "description": "Used with PRIM_PHYSICS_SHAPE_TYPE. Prims of this type use the convex hull of the prim shape for physics (this is the default for mesh objects)"
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_NONE",
        "type": "integer",
        "value": "1",
        "description": "Used with PRIM_PHYSICS_SHAPE_TYPE. Prims of this type are ignored by the physics engine. Read more details on PRIM_PHYSICS_SHAPE_TYPE"
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_PRIM",
        "type": "integer",
        "value": "0",
        "description": "Used with PRIM_PHYSICS_SHAPE_TYPE. Prims of this type use the normal prim shape for physics (this is the default for all non-mesh objects)"
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_TYPE",
        "type": "integer",
        "value": "30",
        "description": "Used to set the type of shape the physics engine should use for the prim. This is primarily used to do Physics Optimization."
    },
    {
        "name": "PRIM_POINT_LIGHT",
        "type": "integer",
        "value": "23",
        "description": "PRIM_POINT_LIGHT is used to configure the point light configuration of the prim"
    },
    {
        "name": "PRIM_POS_LOCAL",
        "type": "integer",
        "value": "33",
        "description": "PRIM_POS_LOCAL is used to get or set the prim's local position."
    },
    {
        "name": "PRIM_POSITION",
        "type": "integer",
        "value": "6",
        "description": "PRIM_POSITION is used to get or set the prim's position."
    },
    {
        "name": "PRIM_PROJECTOR",
        "type": "integer",
        "value": "42",
        "description": "The light projection settings for this prim. If the prim is not a projector the texture key will be NULL_KEY."
    },
    {
        "name": "PRIM_REFLECTION_PROBE",
        "type": "integer",
        "value": "44",
        "description": "PRIM_REFLECTION_PROBE is used to change the reflection probe configuration of the prim.\n\nA reflection probe is a volume used for image-based lighting (IBL). It takes an image of its surroundings and uses it as the basis for reflection effects (shiny surfaces) and ambiance effects (light bouncing).\n\nTypically, the viewer automatically places reflection probes. Prim-based probes enable artists to provide hints to the render engine to improve the quality of image based lighting. Only objects in the probe's influence volume are affected.\n\nLighting is most accurate when the edges of a probe volume are near the geometry that appears in reflections. For example, objects inside a room with a box shaped reflection probe that hugs the walls, floor, and ceiling would show accurate reflections and ambient lighting from the walls of the room."
    },
    {
        "name": "PRIM_REFLECTION_PROBE_BOX",
        "type": "integer",
        "value": "1",
        "description": "Used with PRIM_REFLECTION_PROBE. A reflection probe is a sphere by default, otherwise a box if this flag is set on the corresponding prim."
    },
    {
        "name": "PRIM_REFLECTION_PROBE_DYNAMIC",
        "type": "integer",
        "value": "2",
        "description": "Used with PRIM_REFLECTION_PROBE. A reflection probe does not image avatars by default, otherwise it images avatars if this flag is set on the corresponding prim. Imaging avatars in reflection probes has a performance cost."
    },
    {
        "name": "PRIM_RENDER_MATERIAL",
        "type": "integer",
        "value": "43",
        "description": "Used to get or set the material settings of a prim's face."
    },
    {
        "name": "PRIM_ROT_LOCAL",
        "type": "integer",
        "value": "29",
        "description": "PRIM_ROT_LOCAL is used to get or set the prim's local rotation."
    },
    {
        "name": "PRIM_ROTATION",
        "type": "integer",
        "value": "8",
        "description": "PRIM_ROTATION is used to get or set the prim's rotation."
    },
    {
        "name": "PRIM_SCRIPTED_SIT_ONLY",
        "type": "integer",
        "value": "40",
        "description": "Agents may only be seated on this prim using llSitOnLink.  Attempts to do a manual sit will fail.  This flag applies even outside of an experience enabled region.\n\nIf any prim in a linkset has PRIM_SCRIPTED_SIT_ONLY set and no other prim in the linkset has a sit target then an avatar cannot manually sit on the object.\n\nIf some other prim in the linkset does have a sit target (that is not filled or marked PRIM_SCRIPTED_SIT_ONLY), the agent can sit on that prim"
    },
    {
        "name": "PRIM_SCULPT_FLAG_INVERT",
        "type": "integer",
        "value": "0x40",
        "description": "PRIM_SCULPT_FLAG_INVERT will cause the sculpted prim to render inside out. It works by inverting the Normal of each polygon that makes up the sculpted prim.\n\nSculpted Prims: FAQ\nsculpt_types"
    },
    {
        "name": "PRIM_SCULPT_FLAG_MIRROR",
        "type": "integer",
        "value": "0x80",
        "description": "PRIM_SCULPT_FLAG_MIRROR will cause a mirror of the sculpted prim to rendered. The sculpted prim is mirrored over the X axis.\n\nSculpted Prims: FAQ\nsculpt_types"
    },
    {
        "name": "PRIM_SCULPT_TYPE_CYLINDER",
        "type": "integer",
        "value": "4",
        "description": "When used in conjunction with PRIM_TYPE_SCULPT a cylinder type sculpty is produced. It does this by stitching the left side to right.\nsculpt_types"
    },
    {
        "name": "PRIM_SCULPT_TYPE_MASK",
        "type": "integer",
        "value": "7",
        "description": "PRIM_SCULPT_TYPE_MASK can be used when parsing the output of llGetPrimitiveParams when dealing with sculpted prims (PRIM_TYPE_SCULPT) to separate the sculpted type from the flags (PRIM_SCULPT_FLAG_INVERT and PRIM_SCULPT_FLAG_MIRROR) that can modify it.\n\nSculpted Prims: FAQ\nsculpt_types"
    },
    {
        "name": "PRIM_SCULPT_TYPE_PLANE",
        "type": "integer",
        "value": "3",
        "description": "When used in conjunction with  a plane type sculpty is produced. No stitching or converging is performed.\nsculpt_types"
    },
    {
        "name": "PRIM_SCULPT_TYPE_SPHERE",
        "type": "integer",
        "value": "1",
        "description": "When used in conjunction with  a sphere type sculpty is produced. It does this by stitching the left side to right then separately converging the top & bottom.\nsculpt_types"
    },
    {
        "name": "PRIM_SCULPT_TYPE_TORUS",
        "type": "integer",
        "value": "2",
        "description": "When used in conjunction with  a torus type sculpty is produced. It does this by stitching the top to bottom and the left side to right.\nsculpt_types"
    },
    {
        "name": "PRIM_SHINY_HIGH",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "PRIM_SHINY_LOW",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "PRIM_SHINY_MEDIUM",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "PRIM_SHINY_NONE",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "PRIM_SIT_TARGET",
        "type": "integer",
        "value": "41",
        "description": "The sit target, if any defined for this prim.  If the active value is 0 the sit target is deactivated. If it is nonzero the prim's sit target is set to the indicated offset and rotation. As with llLinkSitTarget(), these values are relative to the prim. However, unlike llLinkSitTarget() an offset of <0.0, 0.0, 0.0> may be explicitly set."
    },
    {
        "name": "PRIM_SIZE",
        "type": "integer",
        "value": "7",
        "description": "Returns or sets the prim's size."
    },
    {
        "name": "PRIM_SLICE",
        "type": "integer",
        "value": "35",
        "description": "Used to get or set the prim's slice values (a shape attribute, equivalent to advanced_cut)."
    },
    {
        "name": "PRIM_SPECULAR",
        "type": "integer",
        "value": "36",
        "description": "Used to get or set the specular map texture settings of a prim's face."
    },
    {
        "name": "PRIM_TEMP_ON_REZ",
        "type": "integer",
        "value": "4",
        "description": "Used to get or set the object's temporary status. It lives until the next garbage collection cycle (about 1 minute). Does not count against normal prim limits. There are limits to the number of temporary objects that can exist in a region and the garbage collector may run sooner than expected."
    },
    {
        "name": "PRIM_TEXGEN",
        "type": "integer",
        "value": "22",
        "description": "PRIM_TEXGEN is used to get and set the configure the texture mapping mode of the face."
    },
    {
        "name": "PRIM_TEXGEN_DEFAULT",
        "type": "integer",
        "value": "0",
        "description": "Used with PRIM_TEXGEN to set the texture mapping mode, specifically that the texture repeats units are in texture repeats per face."
    },
    {
        "name": "PRIM_TEXGEN_PLANAR",
        "type": "integer",
        "value": "1",
        "description": "Used with PRIM_TEXGEN to set the texture mapping mode, specifically that the texture repeats units are in texture repeats per half meter. This is in contrast to the in-world editing tool, in which the planar texture scaling units are repeats per meter."
    },
    {
        "name": "PRIM_TEXT",
        "type": "integer",
        "value": "26",
        "description": "Used to get or set the object's floating text."
    },
    {
        "name": "PRIM_TEXTURE",
        "type": "integer",
        "value": "17",
        "description": "Used to get or set the texture settings of a prim's face."
    },
    {
        "name": "PRIM_TYPE",
        "type": "integer",
        "value": "9",
        "description": "Gets or sets the type of the prim and associated type parameters."
    },
    {
        "name": "PRIM_TYPE_BOX",
        "type": "integer",
        "value": "0",
        "description": "PRIM_TYPE_BOX is a parameter of PRIM_TYPE used to make prim into a box and to change specific properties that define the shape of that box."
    },
    {
        "name": "PRIM_TYPE_CYLINDER",
        "type": "integer",
        "value": "1",
        "description": "PRIM_TYPE_CYLINDER is a parameter of PRIM_TYPE used to make prim into a cylinder and to change specific properties that define the shape of that cylinder."
    },
    {
        "name": "PRIM_TYPE_PRISM",
        "type": "integer",
        "value": "2",
        "description": "PRIM_TYPE_PRISM is a parameter of PRIM_TYPE used to make prim into a prism and to change specific properties that define the shape of that prism."
    },
    {
        "name": "PRIM_TYPE_RING",
        "type": "integer",
        "value": "6",
        "description": "PRIM_TYPE_RING is a parameter of PRIM_TYPE used to make prim into a ring and to change specific properties that define the shape of that ring."
    },
    {
        "name": "PRIM_TYPE_SCULPT",
        "type": "integer",
        "value": "7",
        "description": "PRIM_TYPE_SCULPT is a parameter of PRIM_TYPE used to make a prim into a sculpty of specific shape and type.\n\nSculpted Prims: FAQ"
    },
    {
        "name": "PRIM_TYPE_SPHERE",
        "type": "integer",
        "value": "3",
        "description": "PRIM_TYPE_SPHERE is a parameter of PRIM_TYPE used to make prim into a sphere and to change specific properties that define the shape of that sphere."
    },
    {
        "name": "PRIM_TYPE_TORUS",
        "type": "integer",
        "value": "4",
        "description": "PRIM_TYPE_TORUS is a parameter of PRIM_TYPE used to make prim into a torus and to change specific properties that define the shape of that torus."
    },
    {
        "name": "PRIM_TYPE_TUBE",
        "type": "integer",
        "value": "5",
        "description": "PRIM_TYPE_TUBE is a parameter of PRIM_TYPE used to make prim into a tube and to change specific properties that define the shape of that tube."
    },
    {
        "name": "PROFILE_NONE",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "PROFILE_SCRIPT_MEMORY",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "PUBLIC_CHANNEL",
        "type": "integer",
        "value": "0x0",
        "description": "Chat channel that broadcasts to all nearby users & objects. This channel is sometimes referred to as: open chat, local chat and public chat.\n\nIf used with a llRegionSayTo, it goes to the specified user or prim. Unlike private channels, the user's attachments do not receive the message."
    },
    {
        "name": "RAD_TO_DEG",
        "type": "float",
        "value": "57.295779513082320876798154814105f",
        "description": ""
    },
    {
        "name": "RC_DATA_FLAGS",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "RC_DETECT_PHANTOM",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "RC_GET_LINK_NUM",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "RC_GET_NORMAL",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "RC_GET_ROOT_KEY",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "RC_MAX_HITS",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "RC_REJECT_AGENTS",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "RC_REJECT_LAND",
        "type": "integer",
        "value": "8",
        "description": ""
    },
    {
        "name": "RC_REJECT_NONPHYSICAL",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "RC_REJECT_PHYSICAL",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "RC_REJECT_TYPES",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "RCERR_CAST_TIME_EXCEEDED",
        "type": "integer",
        "value": "-3",
        "description": ""
    },
    {
        "name": "RCERR_SIM_PERF_LOW",
        "type": "integer",
        "value": "-2",
        "description": ""
    },
    {
        "name": "RCERR_UNKNOWN",
        "type": "integer",
        "value": "-1",
        "description": ""
    },
    {
        "name": "REGION_FLAG_ALLOW_DAMAGE",
        "type": "integer",
        "value": "0x00000001",
        "description": "This is a flag used with llGetRegionFlags to check if the region is entirely damage enabled."
    },
    {
        "name": "REGION_FLAG_ALLOW_DIRECT_TELEPORT",
        "type": "integer",
        "value": "0x00100000",
        "description": "This is a flag used with llGetRegionFlags to check if direct teleportation is allowed in the region."
    },
    {
        "name": "REGION_FLAG_BLOCK_FLY",
        "type": "integer",
        "value": "0x00080000",
        "description": "This is a flag used with llGetRegionFlags to check if flying is disabled in the region."
    },
    {
        "name": "REGION_FLAG_BLOCK_TERRAFORM",
        "type": "integer",
        "value": "0x00000040",
        "description": "This is a flag used with llGetRegionFlags to check if terraforming is disabled in the region."
    },
    {
        "name": "REGION_FLAG_DISABLE_COLLISIONS",
        "type": "integer",
        "value": "0x00001000",
        "description": "This is a flag used with llGetRegionFlags to check if collisions have been disabled in the region."
    },
    {
        "name": "REGION_FLAG_DISABLE_PHYSICS",
        "type": "integer",
        "value": "0x00004000",
        "description": "This is a flag used with llGetRegionFlags to check if physics has been disabled in the region."
    },
    {
        "name": "REGION_FLAG_FIXED_SUN",
        "type": "integer",
        "value": "0x00000010",
        "description": "This is a flag used with llGetRegionFlags to check if the sun's position has been fixed in the region."
    },
    {
        "name": "REGION_FLAG_RESTRICT_PUSHOBJECT",
        "type": "integer",
        "value": "0x00400000",
        "description": "This is a flag used with llGetRegionFlags to check if llPushObject is restricted in the region."
    },
    {
        "name": "REGION_FLAG_SANDBOX",
        "type": "integer",
        "value": "0x00000100",
        "description": "This is a flag used with llGetRegionFlags to check if the region is a sandbox."
    },
    {
        "name": "REMOTE_DATA_CHANNEL",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "REMOTE_DATA_REPLY",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "REMOTE_DATA_REQUEST",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "REVERSE",
        "type": "integer",
        "value": "0x04",
        "description": ""
    },
    {
        "name": "ROTATE",
        "type": "integer",
        "value": "0x20",
        "description": "A flag used with llSetTextureAnim to indicate the rotation style of texture animation."
    },
    {
        "name": "SCALE",
        "type": "integer",
        "value": "0x40",
        "description": ""
    },
    {
        "name": "SCRIPTED",
        "type": "integer",
        "value": "0x8",
        "description": "If it is contained in the result of llDetectedType(), it means what was detected has at least one active script.\nIf it is used as a filter of llSensor() or llSensorRepeat(), it will search for objects that has any script, which is doing anything in simulator just now."
    },
    {
        "name": "SIM_STAT_ACTIVE_SCRIPT_COUNT",
        "type": "integer",
        "value": "12",
        "description": ""
    },
    {
        "name": "SIM_STAT_AGENT_COUNT",
        "type": "integer",
        "value": "10",
        "description": ""
    },
    {
        "name": "SIM_STAT_AGENT_MS",
        "type": "integer",
        "value": "7",
        "description": ""
    },
    {
        "name": "SIM_STAT_AGENT_UPDATES",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "SIM_STAT_AI_MS",
        "type": "integer",
        "value": "26",
        "description": ""
    },
    {
        "name": "SIM_STAT_ASSET_DOWNLOADS",
        "type": "integer",
        "value": "15",
        "description": ""
    },
    {
        "name": "SIM_STAT_ASSET_UPLOADS",
        "type": "integer",
        "value": "16",
        "description": ""
    },
    {
        "name": "SIM_STAT_CHILD_AGENT_COUNT",
        "type": "integer",
        "value": "11",
        "description": ""
    },
    {
        "name": "SIM_STAT_FRAME_MS",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "SIM_STAT_IMAGE_MS",
        "type": "integer",
        "value": "8",
        "description": ""
    },
    {
        "name": "SIM_STAT_IO_PUMP_MS",
        "type": "integer",
        "value": "24",
        "description": ""
    },
    {
        "name": "SIM_STAT_NET_MS",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "SIM_STAT_OTHER_MS",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "SIM_STAT_PACKETS_IN",
        "type": "integer",
        "value": "13",
        "description": ""
    },
    {
        "name": "SIM_STAT_PACKETS_OUT",
        "type": "integer",
        "value": "14",
        "description": ""
    },
    {
        "name": "SIM_STAT_PCT_CHARS_STEPPED",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "SIM_STAT_PHYSICS_FPS",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "SIM_STAT_PHYSICS_MS",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "SIM_STAT_PHYSICS_OTHER_MS",
        "type": "integer",
        "value": "20",
        "description": ""
    },
    {
        "name": "SIM_STAT_PHYSICS_SHAPE_MS",
        "type": "integer",
        "value": "19",
        "description": ""
    },
    {
        "name": "SIM_STAT_PHYSICS_STEP_MS",
        "type": "integer",
        "value": "18",
        "description": ""
    },
    {
        "name": "SIM_STAT_SCRIPT_EPS",
        "type": "integer",
        "value": "21",
        "description": ""
    },
    {
        "name": "SIM_STAT_SCRIPT_MS",
        "type": "integer",
        "value": "9",
        "description": ""
    },
    {
        "name": "SIM_STAT_SCRIPT_RUN_PCT",
        "type": "integer",
        "value": "25",
        "description": ""
    },
    {
        "name": "SIM_STAT_SLEEP_MS",
        "type": "integer",
        "value": "23",
        "description": ""
    },
    {
        "name": "SIM_STAT_SPARE_MS",
        "type": "integer",
        "value": "22",
        "description": ""
    },
    {
        "name": "SIM_STAT_UNACKED_BYTES",
        "type": "integer",
        "value": "17",
        "description": ""
    },
    {
        "name": "SMOOTH",
        "type": "integer",
        "value": "0x010",
        "description": ""
    },
    {
        "name": "SQRT2",
        "type": "float",
        "value": "1.4142135623730950488016887242097f",
        "description": ""
    },
    {
        "name": "STATUS_BLOCK_GRAB",
        "type": "integer",
        "value": "0x40",
        "description": "This status flag keeps the object from being moved by Grab. It will only block grab moves of unlinked prims or the root of a linkset.\n*To block grab moves of an entire linkset use STATUS_BLOCK_GRAB_OBJECT\n\nThis means when a user tries to grab an object with this flag enabled, they will be unable to manipulate the object."
    },
    {
        "name": "STATUS_BLOCK_GRAB_OBJECT",
        "type": "integer",
        "value": "0x400",
        "description": "This status flag keeps the object from being moved by Grab. This flag applies to the entire linkset.  \n* To block grab moves of only the root prim or unlinked individual prims, use STATUS_BLOCK_GRAB.\n\nThis means when a user tries to grab an object with this flag enabled, they will be unable to manipulate the object."
    },
    {
        "name": "STATUS_BOUNDS_ERROR",
        "type": "integer",
        "value": "1002",
        "description": ""
    },
    {
        "name": "STATUS_CAST_SHADOWS",
        "type": "integer",
        "value": "0x200",
        "description": "This status flag would set an object's ability to cast shadows.\n\nThere is no client support for this feature. 2011-07-18#msg_44"
    },
    {
        "name": "STATUS_DIE_AT_EDGE",
        "type": "integer",
        "value": "0x80",
        "description": "Causes the object to be deleted when it goes off world, this is overridden by STATUS_RETURN_AT_EDGE."
    },
    {
        "name": "STATUS_DIE_AT_NO_ENTRY",
        "type": "integer",
        "value": "0x800",
        "description": "Causes the object to be deleted when it attempts to enter a parcel that prohibits object entry or is full. Overridden by STATUS_DIE_AT_NO_ENTRY. Objects that are no-copy ignore this setting and remain in world."
    },
    {
        "name": "STATUS_INTERNAL_ERROR",
        "type": "integer",
        "value": "1999",
        "description": ""
    },
    {
        "name": "STATUS_MALFORMED_PARAMS",
        "type": "integer",
        "value": "1000",
        "description": ""
    },
    {
        "name": "STATUS_NOT_FOUND",
        "type": "integer",
        "value": "1003",
        "description": ""
    },
    {
        "name": "STATUS_NOT_SUPPORTED",
        "type": "integer",
        "value": "1004",
        "description": ""
    },
    {
        "name": "STATUS_OK",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "STATUS_PHANTOM",
        "type": "integer",
        "value": "0x10",
        "description": "This property (set FALSE by default) when set TRUE turns the object un-solid (objects and avatars can pass through it)."
    },
    {
        "name": "STATUS_PHYSICS",
        "type": "integer",
        "value": "0x1",
        "description": "This property (set FALSE by default) if set TRUE allows that the object is subject to and can offer physical interactions and forces."
    },
    {
        "name": "STATUS_RETURN_AT_EDGE",
        "type": "integer",
        "value": "0x100",
        "description": "Causes the object to be returned when it goes off world, overrides STATUS_DIE_AT_EDGE."
    },
    {
        "name": "STATUS_ROTATE_X",
        "type": "integer",
        "value": "0x2",
        "description": "This property (set TRUE by default), if set FALSE, attempts to stop physical rotation on the objects local X axis."
    },
    {
        "name": "STATUS_ROTATE_Y",
        "type": "integer",
        "value": "0x4",
        "description": "This property (set TRUE by default), if set FALSE, attempts to stop physical rotation on the objects local Y axis."
    },
    {
        "name": "STATUS_ROTATE_Z",
        "type": "integer",
        "value": "0x8",
        "description": "This property (set TRUE by default), if set FALSE, attempts to stop physical rotation on the objects local Z axis."
    },
    {
        "name": "STATUS_SANDBOX",
        "type": "integer",
        "value": "0x20",
        "description": "This status flag keeps the object from getting away.\n\nIt causes the object to be unable to leave the sim or move more than 10 meters from the location where the flag was set.\n\nIf the object tries to leave the sim or move more than 10 meters it ceases to be physical and throws a \"Hit Sandbox Limit\" Error."
    },
    {
        "name": "STATUS_TYPE_MISMATCH",
        "type": "integer",
        "value": "1001",
        "description": ""
    },
    {
        "name": "STATUS_WHITELIST_FAILED",
        "type": "integer",
        "value": "2001",
        "description": ""
    },
    {
        "name": "STRING_TRIM",
        "type": "integer",
        "value": "0x03",
        "description": "Trim spaces off the beginning and the end. Equal to <source lang"
    },
    {
        "name": "STRING_TRIM_HEAD",
        "type": "integer",
        "value": "0x01",
        "description": "Trim spaces off the beginning"
    },
    {
        "name": "STRING_TRIM_TAIL",
        "type": "integer",
        "value": "0x02",
        "description": "Trim spaces off the end"
    },
    {
        "name": "TARGETED_EMAIL_OBJECT_OWNER",
        "type": "integer",
        "value": "2",
        "description": "Causes the message to be sent to the owner of the calling object"
    },
    {
        "name": "TEXTURE_BLANK",
        "type": "string",
        "value": "\"5748decc-f629-461c-9a36-a35a221fe21f\"",
        "description": "UUID for the \"Blank\" texture"
    },
    {
        "name": "TEXTURE_MEDIA",
        "type": "string",
        "value": "\"8b5fec65-8d8d-9dc5-cda8-8fdf2716e361\"",
        "description": "UUID for the \"Default Media\" texture"
    },
    {
        "name": "TEXTURE_PLYWOOD",
        "type": "string",
        "value": "\"89556747-24cb-43ed-920b-47caed15465f\"",
        "description": "UUID for the default \"Plywood\" texture"
    },
    {
        "name": "TEXTURE_DEFAULT",
        "type": "string",
        "value": "\"89556747-24cb-43ed-920b-47caed15465f\"",
        "description": "UUID for the default \"Plywood\" texture"
    },
    {
        "name": "TEXTURE_TRANSPARENT",
        "type": "string",
        "value": "\"8dcd4a48-2d37-4909-9f78-f7a9eb4ef903\"",
        "description": "UUID for \"*Default Transparent Texture\" in the library, also included with viewers."
    },
    {
        "name": "TOUCH_INVALID_FACE",
        "type": "integer",
        "value": "0xFFFFFFFF",
        "description": "Returned by touch position is not valid.\n\nSpecifically when...\n* The avatar's viewer does not support face touch detection.\n* The touch has moved off the surface of the prim.\n* The triggering event is not a touch event."
    },
    {
        "name": "TOUCH_INVALID_TEXCOORD",
        "type": "vector",
        "value": "<-1.0, -1.0, 0.0>",
        "description": "Returned by llDetectedTouchUV and llDetectedTouchST when the touch position is not valid."
    },
    {
        "name": "TOUCH_INVALID_VECTOR",
        "type": "vector",
        "value": "<0.0, 0.0, 0.0>",
        "description": "Returned by llDetectedTouchPos, llDetectedTouchNormal, and llDetectedTouchBinormal when the touch position is not valid."
    },
    {
        "name": "TRAVERSAL_TYPE",
        "type": "integer",
        "value": "7",
        "description": "Used in combination with one of the traversal type flags. The default is TRAVERSAL_TYPE_SLOW, other options are TRAVERSAL_TYPE_FAST and TRAVERSAL_TYPE_NONE."
    },
    {
        "name": "TRUE",
        "type": "integer",
        "value": "1",
        "description": "Constant used to define the TRUE value in conditional structures or variables/constants in general. Usually it's used because it is more readable, indicating a boolean value instead a integer value (1). However, this is an arbitrary distinction in LSL which uses integers to represent Boolean values anyway. It is probably better to consider TRUE and FALSE as mnemonic constants for the integer values 1 and 0."
    },
    {
        "name": "TWO_PI",
        "type": "float",
        "value": "6.283185307179586476925286766559f",
        "description": ""
    },
    {
        "name": "TYPE_FLOAT",
        "type": "integer",
        "value": "2",
        "description": ""
    },
    {
        "name": "TYPE_INTEGER",
        "type": "integer",
        "value": "1",
        "description": ""
    },
    {
        "name": "TYPE_INVALID",
        "type": "integer",
        "value": "0",
        "description": ""
    },
    {
        "name": "TYPE_KEY",
        "type": "integer",
        "value": "4",
        "description": ""
    },
    {
        "name": "TYPE_ROTATION",
        "type": "integer",
        "value": "6",
        "description": ""
    },
    {
        "name": "TYPE_STRING",
        "type": "integer",
        "value": "3",
        "description": ""
    },
    {
        "name": "TYPE_VECTOR",
        "type": "integer",
        "value": "5",
        "description": ""
    },
    {
        "name": "URL_REQUEST_DENIED",
        "type": "string",
        "value": "\"URL_REQUEST_DENIED\"",
        "description": ""
    },
    {
        "name": "URL_REQUEST_GRANTED",
        "type": "string",
        "value": "\"URL_REQUEST_GRANTED\"",
        "description": ""
    },
    {
        "name": "VEHICLE_ANGULAR_DEFLECTION_EFFICIENCY",
        "type": "integer",
        "value": "32",
        "description": "Slider between 0 (no deflection) and 1 (maximum strength)"
    },
    {
        "name": "VEHICLE_ANGULAR_DEFLECTION_TIMESCALE",
        "type": "integer",
        "value": "33",
        "description": "Exponential timescale for the vehicle to achieve full angular deflection"
    },
    {
        "name": "VEHICLE_ANGULAR_FRICTION_TIMESCALE",
        "type": "integer",
        "value": "17",
        "description": "Vector of timescales for exponential decay of angular velocity about the three vehicle axes"
    },
    {
        "name": "VEHICLE_ANGULAR_MOTOR_DECAY_TIMESCALE",
        "type": "integer",
        "value": "35",
        "description": "Exponential timescale (in seconds) for the angular motor's effectiveness to decay toward zero"
    },
    {
        "name": "VEHICLE_ANGULAR_MOTOR_DIRECTION",
        "type": "integer",
        "value": "19",
        "description": "Vector of angular velocity (in radian/second) that the vehicle will try to achieve"
    },
    {
        "name": "VEHICLE_ANGULAR_MOTOR_TIMESCALE",
        "type": "integer",
        "value": "34",
        "description": "Exponential timescale for the angular motor to achieve full power"
    },
    {
        "name": "VEHICLE_BANKING_EFFICIENCY",
        "type": "integer",
        "value": "38",
        "description": "Slider between -1.00 (leans out of turns), 0 (no banking) and +1.00 (leans into turns).  This parameter makes banking affect steering, not the other way around.  Use vehicle angular motors to bank the vehicle."
    },
    {
        "name": "VEHICLE_BANKING_MIX",
        "type": "integer",
        "value": "39",
        "description": "Slider between 0 (static banking) and 1 (dynamic banking)"
    },
    {
        "name": "VEHICLE_BANKING_TIMESCALE",
        "type": "integer",
        "value": "40",
        "description": "Exponential timescale for the banking behaviour to take full effect"
    },
    {
        "name": "VEHICLE_BUOYANCY",
        "type": "integer",
        "value": "27",
        "description": "Slider between -1 (double gravity) and 1 (full anti-gravity)"
    },
    {
        "name": "VEHICLE_FLAG_CAMERA_DECOUPLED",
        "type": "integer",
        "value": "0x200",
        "description": "Makes mouselook camera rotate independently of the vehicle. By default the client mouselook camera will rotate about with the vehicle, however when this flag is set the camera direction is independent of the vehicle's rotation.    When this flag is set, the vehicle will automatically stop turning once it has aligned itself with the pilot's mouselook camera.  When this flag is not set, the vehicle will continuously try aligning itself with a moving target and will not stop turning until the pilot manually re-aligns their mouselook camera with the vehicle's forward axis."
    },
    {
        "name": "VEHICLE_FLAG_HOVER_GLOBAL_HEIGHT",
        "type": "integer",
        "value": "0x010",
        "description": "Hover at global height instead of height above ground or water. \n\nIf you wanted to make a boat you should set the VEHICLE_FLAG_HOVER_WATER_ONLY flag, or if you wanted to drive a hover tank under water you would use the VEHICLE_FLAG_HOVER_TERRAIN_ONLY flag instead. Finally, if you wanted to make a submarine or a balloon you would use the VEHICLE_FLAG_HOVER_GLOBAL_HEIGHT. \n\nThe vehicle flags are independent of each other and that setting two contradictory flags will have undefined behavior. The flags are set using the script call llSetVehicleFlags."
    },
    {
        "name": "VEHICLE_FLAG_HOVER_TERRAIN_ONLY",
        "type": "integer",
        "value": "0x008",
        "description": "Makes the vehicle float over land.\n\nIf you wanted to make a boat you should set the VEHICLE_FLAG_HOVER_WATER_ONLY flag, or if you wanted to drive a hover tank under water you would use the VEHICLE_FLAG_HOVER_TERRAIN_ONLY flag instead. Finally, if you wanted to make a submarine or a balloon you would use the VEHICLE_FLAG_HOVER_GLOBAL_HEIGHT. \n\nThe vehicle flags are independent of each other and that setting two contradictory flags will have undefined behavior. The flags are set using the script call llSetVehicleFlags."
    },
    {
        "name": "VEHICLE_FLAG_HOVER_UP_ONLY",
        "type": "integer",
        "value": "0x020",
        "description": ""
    },
    {
        "name": "VEHICLE_FLAG_HOVER_WATER_ONLY",
        "type": "integer",
        "value": "0x004",
        "description": "Makes the vehicle over water.\n\nIf you wanted to make a boat you should set the VEHICLE_FLAG_HOVER_WATER_ONLY flag, or if you wanted to drive a hover tank under water you would use the VEHICLE_FLAG_HOVER_TERRAIN_ONLY flag instead. Finally, if you wanted to make a submarine or a balloon you would use the VEHICLE_FLAG_HOVER_GLOBAL_HEIGHT. \n\nThe vehicle flags are independent of each other and that setting two contradictory flags will have undefined behavior. The flags are set using the script call llSetVehicleFlags."
    },
    {
        "name": "VEHICLE_FLAG_LIMIT_MOTOR_UP",
        "type": "integer",
        "value": "0x080",
        "description": ""
    },
    {
        "name": "VEHICLE_FLAG_LIMIT_ROLL_ONLY",
        "type": "integer",
        "value": "0x002",
        "description": ""
    },
    {
        "name": "VEHICLE_FLAG_MOUSELOOK_BANK",
        "type": "integer",
        "value": "0x200",
        "description": ""
    },
    {
        "name": "VEHICLE_FLAG_MOUSELOOK_STEER",
        "type": "integer",
        "value": "0x100",
        "description": ""
    },
    {
        "name": "VEHICLE_FLAG_NO_DEFLECTION_UP",
        "type": "integer",
        "value": "0x001",
        "description": ""
    },
    {
        "name": "VEHICLE_FLAG_NO_FLY_UP",
        "type": "integer",
        "value": "0x001",
        "description": ""
    },
    {
        "name": "VEHICLE_HOVER_EFFICIENCY",
        "type": "integer",
        "value": "25",
        "description": "Slider between 0 (bouncy) and 1 (critically damped) hover behaviour"
    },
    {
        "name": "VEHICLE_HOVER_HEIGHT",
        "type": "integer",
        "value": "24",
        "description": "Height the vehicle will try to hover above ground. Set to zero to disable hover."
    },
    {
        "name": "VEHICLE_HOVER_TIMESCALE",
        "type": "integer",
        "value": "26",
        "description": "Period of time (in seconds) for the vehicle to achieve its hover height"
    },
    {
        "name": "VEHICLE_LINEAR_DEFLECTION_EFFICIENCY",
        "type": "integer",
        "value": "28",
        "description": "Slider between 0 (no deflection) and 1 (maximum strength)"
    },
    {
        "name": "VEHICLE_LINEAR_DEFLECTION_TIMESCALE",
        "type": "integer",
        "value": "31",
        "description": "Exponential timescale for the vehicle to redirect its velocity to its x-axis"
    },
    {
        "name": "VEHICLE_LINEAR_FRICTION_TIMESCALE",
        "type": "integer",
        "value": "16",
        "description": "Vector of timescales for exponential decay of linear velocity about the three vehicle axes"
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_DECAY_TIMESCALE",
        "type": "integer",
        "value": "31",
        "description": "Exponential timescale (in seconds) for the linear motor's effectiveness to decay toward zero"
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_DIRECTION",
        "type": "integer",
        "value": "18",
        "description": "Vector of linear velocity (in meters/second) that the vehicle will try to achieve.\n\nMay conflict with any active llTargetOmega set in the root prim and prevent vehicle turns. Call llTargetOmega with a gain of 0 to disable it."
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_OFFSET",
        "type": "integer",
        "value": "20",
        "description": "Used with llSetVehicleVectorParam to set the offset for where the linear motor is to be applied from the vehicle's center of mass."
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_TIMESCALE",
        "type": "integer",
        "value": "30",
        "description": "Exponential timescale for the vehicle to achieve its full linear motor velocity"
    },
    {
        "name": "VEHICLE_REFERENCE_FRAME",
        "type": "integer",
        "value": "44",
        "description": "Used to set the rotation of vehicle axes relative to local frame."
    },
    {
        "name": "VEHICLE_TYPE_AIRPLANE",
        "type": "integer",
        "value": "4",
        "description": "Uses linear deflection for lift, no hover, and banking to turn."
    },
    {
        "name": "VEHICLE_TYPE_BALLOON",
        "type": "integer",
        "value": "5",
        "description": "Hover, and friction, but no deflection."
    },
    {
        "name": "VEHICLE_TYPE_BOAT",
        "type": "integer",
        "value": "3",
        "description": "Hovers over water with lots of friction and some anglar deflection."
    },
    {
        "name": "VEHICLE_TYPE_CAR",
        "type": "integer",
        "value": "2",
        "description": "Another vehicle that bounces along the ground but needs the motors to be driven from external controls or timer events."
    },
    {
        "name": "VEHICLE_TYPE_NONE",
        "type": "integer",
        "value": "0",
        "description": "Turns off vehicle support"
    },
    {
        "name": "VEHICLE_TYPE_SLED",
        "type": "integer",
        "value": "1",
        "description": "Simple vehicle that bumps along the ground, and likes to move along it’s local x-axis."
    },
    {
        "name": "VEHICLE_VERTICAL_ATTRACTION_EFFICIENCY",
        "type": "integer",
        "value": "36",
        "description": "Slider between 0 (bouncy) and 1 (critically damped) attraction of vehicle's z-axis to orient to the world's z axis (up)."
    },
    {
        "name": "VEHICLE_VERTICAL_ATTRACTION_TIMESCALE",
        "type": "integer",
        "value": "37",
        "description": "Exponential timescale (in seconds) for the vehicle to align its z-axis to the world z-axis."
    },
    {
        "name": "VERTICAL",
        "type": "integer",
        "value": "0",
        "description": "Constant to indicate that the orientation of the capsule for a Pathfinding character is vertical."
    },
    {
        "name": "ZERO_ROTATION",
        "type": "rotation",
        "value": "<0.0, 0.0, 0.0, 1.0>",
        "description": ""
    },
    {
        "name": "ZERO_VECTOR",
        "type": "vector",
        "value": "<0.0, 0.0, 0.0>",
        "description": ""
    }
]);