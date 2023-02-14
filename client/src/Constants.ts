export const Constants = [
    {
        "name": "ACTIVE",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant ACTIVE has the value 0x2\n\nIf it is contained in the result of llDetectedType(), it means it is physical tasks. (Physical objects & agents) \nIf it is used as an filter of llSensor() or llSensorRepeat(), it will search for physical objects that are moving or objects containing an active script. Thus, it is using SL server resources now."
    },
    {
        "name": "AGENT",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant AGENT has the value 0x1\n\nIf it is contained in the result of llDetectedType, it means it is avatar.\nIf it is used as an filter of llSensor or llSensorRepeat, it will search for avatars by legacy name. Use of this constant in this context is not recommended as AGENT_BY_LEGACY_NAME is more informative."
    },
    {
        "name": "AGENT_ALWAYS_RUN",
        "type": "integer",
        "value": "0x1000",
        "description": "The integer constant AGENT_ALWAYS_RUN has the value 0x1000\n\nUsed with llGetAgentInfo to determine if the queried avatar has 'always running' set."
    },
    {
        "name": "AGENT_ATTACHMENTS",
        "type": "integer",
        "value": "0x0002",
        "description": "The integer constant AGENT_ATTACHMENTS has the value 0x0002"
    },
    {
        "name": "AGENT_AUTOPILOT",
        "type": "integer",
        "value": "0x2000",
        "description": "The integer constant AGENT_AUTOPILOT has the value 0x2000\n\nThis value is set when the user selects \"Go Here\" on the ground, or uses the optional Double-Click Auto-Pilot feature."
    },
    {
        "name": "AGENT_AWAY",
        "type": "integer",
        "value": "0x0040",
        "description": "The integer constant AGENT_AWAY has the value 0x0040\n\nIndicates that the agent has either toggled away or has been inactive for too long."
    },
    {
        "name": "AGENT_BUSY",
        "type": "integer",
        "value": "0x0800",
        "description": "The integer constant AGENT_BUSY has the value 0x0800"
    },
    {
        "name": "AGENT_BY_LEGACY_NAME",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant AGENT_BY_LEGACY_NAME has the value 0x1\n\nIf it is contained in the result of llDetectedType, it means it is avatar.\nIf it is used as an filter of llSensor or llSensorRepeat, it will search for avatars by legacy name."
    },
    {
        "name": "AGENT_BY_USERNAME",
        "type": "integer",
        "value": "0x10",
        "description": "The integer constant AGENT_BY_USERNAME has the value 0x10\n\nSee Avatar Names"
    },
    {
        "name": "AGENT_CROUCHING",
        "type": "integer",
        "value": "0x0400",
        "description": "The integer constant AGENT_CROUCHING has the value 0x0400"
    },
    {
        "name": "AGENT_FLYING",
        "type": "integer",
        "value": "0x0001",
        "description": "The integer constant AGENT_FLYING has the value 0x0001\n\nUsed with llGetAgentInfo to determine if the queried avatar is flying."
    },
    {
        "name": "AGENT_IN_AIR",
        "type": "integer",
        "value": "0x0100",
        "description": "The integer constant AGENT_IN_AIR has the value 0x0100"
    },
    {
        "name": "AGENT_LIST_PARCEL",
        "type": "integer",
        "value": "1",
        "description": "The integer constant AGENT_LIST_PARCEL has the value 1\n\nAgents on the same parcel where the script is running."
    },
    {
        "name": "AGENT_LIST_PARCEL_OWNER",
        "type": "integer",
        "value": "2",
        "description": "The integer constant AGENT_LIST_PARCEL_OWNER has the value 2\n\nAgents on any parcel in the region where the parcel owner is the same as the owner of the parcel under the scripted object."
    },
    {
        "name": "AGENT_LIST_REGION",
        "type": "integer",
        "value": "4",
        "description": "The integer constant AGENT_LIST_REGION has the value 4\n\nReturns any/all agents in the region."
    },
    {
        "name": "AGENT_MOUSELOOK",
        "type": "integer",
        "value": "0x0008",
        "description": "The integer constant AGENT_MOUSELOOK has the value 0x0008"
    },
    {
        "name": "AGENT_ON_OBJECT",
        "type": "integer",
        "value": "0x0020",
        "description": "The integer constant AGENT_ON_OBJECT has the value 0x0020"
    },
    {
        "name": "AGENT_SCRIPTED",
        "type": "integer",
        "value": "0x0004",
        "description": "The integer constant AGENT_SCRIPTED has the value 0x0004\n\nCarrying scripted objects"
    },
    {
        "name": "AGENT_SITTING",
        "type": "integer",
        "value": "0x0010",
        "description": "The integer constant AGENT_SITTING has the value 0x0010"
    },
    {
        "name": "AGENT_TYPING",
        "type": "integer",
        "value": "0x0200",
        "description": "The integer constant AGENT_TYPING has the value 0x0200"
    },
    {
        "name": "AGENT_WALKING",
        "type": "integer",
        "value": "0x0080",
        "description": "The integer constant AGENT_WALKING has the value 0x0080\n\nUsed with llGetAgentInfo to determine if the queried avatar is walking."
    },
    {
        "name": "ALL_SIDES",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant ALL_SIDES has the value -1"
    },
    {
        "name": "ANIM_ON",
        "type": "integer",
        "value": "0x01",
        "description": "The integer constant ANIM_ON has the value 0x01"
    },
    {
        "name": "ATTACH_AVATAR_CENTER",
        "type": "integer",
        "value": "40",
        "description": "The integer constant ATTACH_AVATAR_CENTER has the value 40"
    },
    {
        "name": "ATTACH_BACK",
        "type": "integer",
        "value": "9",
        "description": "The integer constant ATTACH_BACK has the value 9"
    },
    {
        "name": "ATTACH_BELLY",
        "type": "integer",
        "value": "28",
        "description": "The integer constant ATTACH_BELLY has the value 28"
    },
    {
        "name": "ATTACH_CHEST",
        "type": "integer",
        "value": "1",
        "description": "The attach_point integer constant ATTACH_CHEST has the value 1"
    },
    {
        "name": "ATTACH_CHIN",
        "type": "integer",
        "value": "12",
        "description": "The integer constant ATTACH_CHIN has the value 12\n\nThis constant is returned when the attachment point is the chin."
    },
    {
        "name": "ATTACH_FACE_JAW",
        "type": "integer",
        "value": "47",
        "description": "The integer constant ATTACH_FACE_JAW has the value 47"
    },
    {
        "name": "ATTACH_FACE_LEAR",
        "type": "integer",
        "value": "48",
        "description": "The integer constant ATTACH_FACE_LEAR has the value 48"
    },
    {
        "name": "ATTACH_FACE_LEYE",
        "type": "integer",
        "value": "50",
        "description": "The integer constant ATTACH_FACE_LEYE has the value 50"
    },
    {
        "name": "ATTACH_FACE_REAR",
        "type": "integer",
        "value": "49",
        "description": "The integer constant ATTACH_FACE_REAR has the value 49"
    },
    {
        "name": "ATTACH_FACE_REYE",
        "type": "integer",
        "value": "51",
        "description": "The integer constant ATTACH_FACE_REYE has the value 51"
    },
    {
        "name": "ATTACH_FACE_TONGUE",
        "type": "integer",
        "value": "52",
        "description": "The integer constant ATTACH_FACE_TONGUE has the value 52"
    },
    {
        "name": "ATTACH_GROIN",
        "type": "integer",
        "value": "53",
        "description": "The integer constant ATTACH_GROIN has the value 53"
    },
    {
        "name": "ATTACH_HEAD",
        "type": "integer",
        "value": "2",
        "description": "The integer constant ATTACH_HEAD has the value 2"
    },
    {
        "name": "ATTACH_HIND_LFOOT",
        "type": "integer",
        "value": "54",
        "description": "The integer constant ATTACH_HIND_LFOOT has the value 54"
    },
    {
        "name": "ATTACH_HIND_RFOOT",
        "type": "integer",
        "value": "55",
        "description": "The integer constant ATTACH_HIND_RFOOT has the value 55"
    },
    {
        "name": "ATTACH_HUD_BOTTOM",
        "type": "integer",
        "value": "37",
        "description": "The integer constant ATTACH_HUD_BOTTOM has the value 37"
    },
    {
        "name": "ATTACH_HUD_BOTTOM_LEFT",
        "type": "integer",
        "value": "36",
        "description": "The integer constant ATTACH_HUD_BOTTOM_LEFT has the value 36"
    },
    {
        "name": "ATTACH_HUD_BOTTOM_RIGHT",
        "type": "integer",
        "value": "38",
        "description": "The integer constant ATTACH_HUD_BOTTOM_RIGHT has the value 38"
    },
    {
        "name": "ATTACH_HUD_CENTER_1",
        "type": "integer",
        "value": "35",
        "description": "The integer constant ATTACH_HUD_CENTER_1 has the value 35"
    },
    {
        "name": "ATTACH_HUD_CENTER_2",
        "type": "integer",
        "value": "31",
        "description": "The integer constant ATTACH_HUD_CENTER_2 has the value 31"
    },
    {
        "name": "ATTACH_HUD_TOP_CENTER",
        "type": "integer",
        "value": "33",
        "description": "The integer constant ATTACH_HUD_TOP_CENTER has the value 33"
    },
    {
        "name": "ATTACH_HUD_TOP_LEFT",
        "type": "integer",
        "value": "34",
        "description": "The integer constant ATTACH_HUD_TOP_LEFT has the value 34"
    },
    {
        "name": "ATTACH_HUD_TOP_RIGHT",
        "type": "integer",
        "value": "32",
        "description": "The integer constant ATTACH_HUD_TOP_RIGHT has the value 32"
    },
    {
        "name": "ATTACH_LEAR",
        "type": "integer",
        "value": "13",
        "description": "The integer constant ATTACH_LEAR has the value 13\n\nLeft ear"
    },
    {
        "name": "ATTACH_LEFT_PEC",
        "type": "integer",
        "value": "29",
        "description": "The integer constant ATTACH_LEFT_PEC has the value 29"
    },
    {
        "name": "ATTACH_LEYE",
        "type": "integer",
        "value": "15",
        "description": "The integer constant ATTACH_LEYE has the value 15"
    },
    {
        "name": "ATTACH_LFOOT",
        "type": "integer",
        "value": "7",
        "description": "The integer constant ATTACH_LFOOT has the value 7"
    },
    {
        "name": "ATTACH_LHAND",
        "type": "integer",
        "value": "5",
        "description": "The integer constant ATTACH_LHAND has the value 5"
    },
    {
        "name": "ATTACH_LHAND_RING1",
        "type": "integer",
        "value": "41",
        "description": "The integer constant ATTACH_LHAND_RING1 has the value 41"
    },
    {
        "name": "ATTACH_LHIP",
        "type": "integer",
        "value": "25",
        "description": "The integer constant ATTACH_LHIP has the value 25\n\nLeft Hip"
    },
    {
        "name": "ATTACH_LLARM",
        "type": "integer",
        "value": "21",
        "description": "The integer constant ATTACH_LLARM has the value 21\n\nLower Left Arm"
    },
    {
        "name": "ATTACH_LLLEG",
        "type": "integer",
        "value": "27",
        "description": "The integer constant ATTACH_LLLEG has the value 27\n\nLeft lower leg"
    },
    {
        "name": "ATTACH_LSHOULDER",
        "type": "integer",
        "value": "3",
        "description": "The integer constant ATTACH_LSHOULDER has the value 3"
    },
    {
        "name": "ATTACH_LSHOULDER",
        "type": "integer",
        "value": "3",
        "description": "The integer constant ATTACH_LSHOULDER has the value 3"
    },
    {
        "name": "ATTACH_LULEG",
        "type": "integer",
        "value": "26",
        "description": "The integer constant ATTACH_LULEG has the value 26\n\nLeft Upper Leg"
    },
    {
        "name": "ATTACH_LWING",
        "type": "integer",
        "value": "45",
        "description": "The integer constant ATTACH_LWING has the value 45"
    },
    {
        "name": "ATTACH_MOUTH",
        "type": "integer",
        "value": "11",
        "description": "The integer constant ATTACH_MOUTH has the value 11"
    },
    {
        "name": "ATTACH_NECK",
        "type": "integer",
        "value": "39",
        "description": "The integer constant ATTACH_NECK has the value 39"
    },
    {
        "name": "ATTACH_NOSE",
        "type": "integer",
        "value": "17",
        "description": "The integer constant ATTACH_NOSE has the value 17"
    },
    {
        "name": "ATTACH_PELVIS",
        "type": "integer",
        "value": "10",
        "description": "The integer constant ATTACH_PELVIS has the value 10"
    },
    {
        "name": "ATTACH_REAR",
        "type": "integer",
        "value": "14",
        "description": "The integer constant ATTACH_REAR has the value 14\n\nRight ear"
    },
    {
        "name": "ATTACH_REYE",
        "type": "integer",
        "value": "16",
        "description": "The integer constant ATTACH_REYE has the value 16"
    },
    {
        "name": "ATTACH_RFOOT",
        "type": "integer",
        "value": "8",
        "description": "The integer constant ATTACH_RFOOT has the value 8"
    },
    {
        "name": "ATTACH_RHAND",
        "type": "integer",
        "value": "6",
        "description": "The integer constant ATTACH_RHAND has the value 6\n\nIndicates the right hand attach point, which just so happens to be the default attach point."
    },
    {
        "name": "ATTACH_RHAND_RING1",
        "type": "integer",
        "value": "42",
        "description": "The integer constant ATTACH_RHAND_RING1 has the value 42"
    },
    {
        "name": "ATTACH_RHIP",
        "type": "integer",
        "value": "22",
        "description": "The integer constant ATTACH_RHIP has the value 22"
    },
    {
        "name": "ATTACH_RIGHT_PEC",
        "type": "integer",
        "value": "30",
        "description": "The integer constant ATTACH_RIGHT_PEC has the value 30"
    },
    {
        "name": "ATTACH_RLARM",
        "type": "integer",
        "value": "19",
        "description": "The integer constant ATTACH_RLARM has the value 19\n\nRight lower arm"
    },
    {
        "name": "ATTACH_RLLEG",
        "type": "integer",
        "value": "24",
        "description": "The integer constant ATTACH_RLLEG has the value 24"
    },
    {
        "name": "ATTACH_RSHOULDER",
        "type": "integer",
        "value": "4",
        "description": "The integer constant ATTACH_RSHOULDER has the value 4"
    },
    {
        "name": "ATTACH_RUARM",
        "type": "integer",
        "value": "18",
        "description": "The integer constant ATTACH_RUARM has the value 18\n\nRight upper arm"
    },
    {
        "name": "ATTACH_RULEG",
        "type": "integer",
        "value": "23",
        "description": "The integer constant ATTACH_RULEG has the value 23\n\nRight upper leg"
    },
    {
        "name": "ATTACH_RWING",
        "type": "integer",
        "value": "46",
        "description": "The integer constant ATTACH_RWING has the value 46"
    },
    {
        "name": "ATTACH_TAIL_BASE",
        "type": "integer",
        "value": "43",
        "description": "The integer constant ATTACH_TAIL_BASE has the value 43"
    },
    {
        "name": "ATTACH_TAIL_TIP",
        "type": "integer",
        "value": "44",
        "description": "The integer constant ATTACH_TAIL_TIP has the value 44"
    },
    {
        "name": "CAMERA_ACTIVE",
        "type": "integer",
        "value": "12",
        "description": "The integer constant CAMERA_ACTIVE has the value 12"
    },
    {
        "name": "CAMERA_BEHINDNESS_ANGLE",
        "type": "integer",
        "value": "8",
        "description": "The integer constant CAMERA_BEHINDNESS_ANGLE has the value 8"
    },
    {
        "name": "CAMERA_BEHINDNESS_LAG",
        "type": "integer",
        "value": "9",
        "description": "The integer constant CAMERA_BEHINDNESS_LAG has the value 9"
    },
    {
        "name": "CAMERA_DISTANCE",
        "type": "integer",
        "value": "7",
        "description": "The integer constant CAMERA_DISTANCE has the value 7"
    },
    {
        "name": "CAMERA_FOCUS",
        "type": "integer",
        "value": "17",
        "description": "The integer constant CAMERA_FOCUS has the value 17"
    },
    {
        "name": "CAMERA_FOCUS_LAG",
        "type": "integer",
        "value": "6",
        "description": "The integer constant CAMERA_FOCUS_LAG has the value 6"
    },
    {
        "name": "CAMERA_FOCUS_LOCKED",
        "type": "integer",
        "value": "22",
        "description": "The integer constant CAMERA_FOCUS_LOCKED has the value 22"
    },
    {
        "name": "CAMERA_FOCUS_OFFSET",
        "type": "integer",
        "value": "1",
        "description": "The integer constant CAMERA_FOCUS_OFFSET has the value 1"
    },
    {
        "name": "CAMERA_FOCUS_THRESHOLD",
        "type": "integer",
        "value": "11",
        "description": "The integer constant CAMERA_FOCUS_THRESHOLD has the value 11"
    },
    {
        "name": "CAMERA_PITCH",
        "type": "integer",
        "value": "0",
        "description": "The integer constant CAMERA_PITCH has the value 0"
    },
    {
        "name": "CAMERA_POSITION",
        "type": "integer",
        "value": "13",
        "description": "The integer constant CAMERA_POSITION has the value 13"
    },
    {
        "name": "CAMERA_POSITION_LAG",
        "type": "integer",
        "value": "5",
        "description": "The integer constant CAMERA_POSITION_LAG has the value 5"
    },
    {
        "name": "CAMERA_POSITION_LOCKED",
        "type": "integer",
        "value": "21",
        "description": "The integer constant CAMERA_POSITION_LOCKED has the value 21"
    },
    {
        "name": "CAMERA_POSITION_THRESHOLD",
        "type": "integer",
        "value": "10",
        "description": "The integer constant CAMERA_POSITION_THRESHOLD has the value 10"
    },
    {
        "name": "CHANGED_ALLOWED_DROP",
        "type": "integer",
        "value": "0x40",
        "description": "The integer constant CHANGED_ALLOWED_DROP has the value 0x40\n\nA user other then the owner (or the owner if the object is no-mod) has added inventory to the prim. This is only possible if enabled with llAllowInventoryDrop."
    },
    {
        "name": "CHANGED_COLOR",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant CHANGED_COLOR has the value 0x2\n\nPrim color or alpha parameters have changed"
    },
    {
        "name": "CHANGED_INVENTORY",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant CHANGED_INVENTORY has the value 0x1\n\nPrim inventory has changed by someone who has modification rights to a prim."
    },
    {
        "name": "CHANGED_LINK",
        "type": "integer",
        "value": "0x20",
        "description": "The integer constant CHANGED_LINK has the value 0x20\n\nThe number of prims making up the object or avatars seated on the object have changed. This event also occurs when duplicating a linked object or when a prim in an object changes type or shape. This event does not occur when: an object is attached or detached, in an attachment when the avatar sits or unsits, in an attachment when another object is attached or detached, or when a single prim is duplicated."
    },
    {
        "name": "CHANGED_MEDIA",
        "type": "integer",
        "value": "0x800",
        "description": "The integer constant CHANGED_MEDIA has the value 0x800\n\nPrim Media on the prim has changed."
    },
    {
        "name": "CHANGED_OWNER",
        "type": "integer",
        "value": "0x80",
        "description": "The integer constant CHANGED_OWNER has the value 0x80\n\nThe object has changed owners. This event occurs in the original object when a user takes it or takes a copy of it or when the owner deeds it to a group. The event occurs in the new object when it is first rezzed. "
    },
    {
        "name": "CHANGED_REGION",
        "type": "integer",
        "value": "0x100",
        "description": "The integer constant CHANGED_REGION has the value 0x100\n\nThe object has changed region by crossing a region boundary (or by teleporting, if attached). This event only occurs in the root prim of a linkset. This event does not occur in child prims of objects when they cross a region boundary."
    },
    {
        "name": "CHANGED_REGION_START",
        "type": "integer",
        "value": "0x400",
        "description": "The integer constant CHANGED_REGION_START has the value 0x400\n\nThe region containing the object has just come online."
    },
    {
        "name": "CHANGED_RENDER_MATERIAL",
        "type": "integer",
        "value": "0x1000",
        "description": "The integer constant CHANGED_RENDER_MATERIAL has the value 0x1000\n\nPrim material ID or material overrides have changed on one or more faces."
    },
    {
        "name": "CHANGED_SCALE",
        "type": "integer",
        "value": "0x8",
        "description": "The integer constant CHANGED_SCALE has the value 0x8\n\nThe prim scale of at least one prim in the linked object has changed. Only the root prim will receive this event."
    },
    {
        "name": "CHANGED_SHAPE",
        "type": "integer",
        "value": "0x4",
        "description": "The integer constant CHANGED_SHAPE has the value 0x4\n\nPRIM_TYPE (box, prism, torus, taper, twist, cut …) has changed."
    },
    {
        "name": "CHANGED_TELEPORT",
        "type": "integer",
        "value": "0x200",
        "description": "The integer constant CHANGED_TELEPORT has the value 0x200\n\nThe avatar this object is attached to has teleported. This event only occurs in the root prim of an attachment when the user has teleported. This event does not occur in child prims of attachments, nor does it occur due to a \"sit teleport\". If the user teleports into a parcel where their scripts are disabled then the CHANGED_TELEPORT event is dropped and does not occur even if the user moved to a script-enabled parcel."
    },
    {
        "name": "CHANGED_TEXTURE",
        "type": "integer",
        "value": "0x10",
        "description": "The integer constant CHANGED_TEXTURE has the value 0x10\n\nPrim texture parameters (shine/bump setting, repeats, flip, rotation, or offset) have changed. "
    },
    {
        "name": "CHARACTER_ACCOUNT_FOR_SKIPPED_FRAMES",
        "type": "integer",
        "value": "14",
        "description": "The integer constant CHARACTER_ACCOUNT_FOR_SKIPPED_FRAMES has the value 14"
    },
    {
        "name": "CHARACTER_AVOIDANCE_MODE",
        "type": "integer",
        "value": "5",
        "description": "The integer constant CHARACTER_AVOIDANCE_MODE has the value 5\n\nUsed in the functions of pathfinding . Is combined with a mask bit flags. The default is AVOID_CHARACTERS with AVOID_DYNAMIC_OBSTACLES.Allows you to specify that a character should not try to avoid other characters, should not try to avoid dynamic obstacles (relatively fast moving objects and avatars), or both."
    },
    {
        "name": "CHARACTER_DESIRED_SPEED",
        "type": "integer",
        "value": "1",
        "description": "The integer constant CHARACTER_DESIRED_SPEED has the value 1\n\nConstant used to indicate that the following argument is the desired speed for a Pathfinding character."
    },
    {
        "name": "CHARACTER_DESIRED_TURN_SPEED",
        "type": "integer",
        "value": "12",
        "description": "The integer constant CHARACTER_DESIRED_TURN_SPEED has the value 12\n\nUsed in the functions of pathfinding . Is combined with a float. The default 6 meters/secondSpecifies the character's maximum speed while turning "
    },
    {
        "name": "CHARACTER_LENGTH",
        "type": "integer",
        "value": "3",
        "description": "The integer constant CHARACTER_LENGTH has the value 3\n\nConstant used to indicate that the following argument is the length of the capsule for a Pathfinding character. This is used to help denote the size of the character."
    },
    {
        "name": "CHARACTER_MAX_ACCEL",
        "type": "integer",
        "value": "8",
        "description": "The integer constant CHARACTER_MAX_ACCEL has the value 8\n\nUsed in the functions of pathfinding . Is combined with a float. The default 20 meters/s(-2).Specifies the character's maximum acceleration rate. "
    },
    {
        "name": "CHARACTER_MAX_DECEL",
        "type": "integer",
        "value": "9",
        "description": "The integer constant CHARACTER_MAX_DECEL has the value 9\n\nUsed in the functions of pathfinding . Is combined with a float. The default 30 meters/s(-2).Specifies the character's maximum deceleration rate. "
    },
    {
        "name": "CHARACTER_MAX_SPEED",
        "type": "integer",
        "value": "13",
        "description": "The integer constant CHARACTER_MAX_SPEED has the value 13\n\nUsed in the functions of pathfinding . Is combined with a float. The default is 20 meters/secondSpecifies the character's maximum speed .Can t be inferior to 0.2 meters/second and can't be superior to 50 meters/second"
    },
    {
        "name": "CHARACTER_MAX_TURN_RADIUS",
        "type": "integer",
        "value": "10",
        "description": "The integer constant CHARACTER_MAX_TURN_RADIUS has the value 10\n\nUsed in the functions of pathfinding . Is combined with a float. The default 1.25 meter.Specifies the character's radius when the characters turns at the speed CHARACTER_DESIRED_TURN_SPEED"
    },
    {
        "name": "CHARACTER_ORIENTATION",
        "type": "integer",
        "value": "4",
        "description": "The integer constant CHARACTER_ORIENTATION has the value 4\n\nConstant used to indicate that the following argument is the orientation of the capsule for a Pathfinding character. This is used to help denote how to interpret the size of a character."
    },
    {
        "name": "CHARACTER_ORIENTATION",
        "type": "integer",
        "value": "4",
        "description": "The integer constant CHARACTER_ORIENTATION has the value 4\n\nConstant used to indicate that the following argument is the orientation of the capsule for a Pathfinding character. This is used to help denote how to interpret the size of a character."
    },
    {
        "name": "CHARACTER_STAY_WITHIN_PARCEL",
        "type": "integer",
        "value": "15",
        "description": "The integer constant CHARACTER_STAY_WITHIN_PARCEL has the value 15\n\nDefault setting is FALSE, leading to traditional pathfinding behavior.\n If a parcel allows scripts and objects and the character does not have the CHARACTER_STAY_WITHIN_PARCEL option enabled, it can freely cross the parcel boundary in both directions.\nCharacters which have CHARACTER_STAY_WITHIN_PARCEL set to TRUE treat the parcel boundaries as one-way obstacles.\nPathfinding wander, flee, evade, and pursue behaviors will only choose goal points within their starting parcel.\nIf a character somehow manages to escape its original parcel (e.g. it was 'pushed' out), it will be able to return to the original parcel, but will be unable to leave the original parcel afterwards."
    },
    {
        "name": "CHARACTER_TYPE",
        "type": "integer",
        "value": "6",
        "description": "The integer constant CHARACTER_TYPE has the value 6\n\nUsed in combination with one of the character type flags. The default is CHARACTER_TYPE_NONE, other options are CHARACTER_TYPE_A, CHARACTER_TYPE_B, CHARACTER_TYPE_C and CHARACTER_TYPE_D. Note that the character type is not used to describe the behavior of the Pathfinding object but is used to describe the kind of surface and terrain that it prefers to travel. For example, a cow designed for a field should use character type B, but sheep designed to be herded along a road should use character type C."
    },
    {
        "name": "CHARACTER_TYPE_A",
        "type": "integer",
        "value": "0",
        "description": "The integer constant CHARACTER_TYPE_A has the value 0\n\nUsed for character types that you prefer move in a way consistent with humanoids."
    },
    {
        "name": "CHARACTER_TYPE_B",
        "type": "integer",
        "value": "1",
        "description": "The integer constant CHARACTER_TYPE_B has the value 1\n\nUsed for character types that you prefer move in a way consistent with wild animals or off road vehicles."
    },
    {
        "name": "CHARACTER_TYPE_C",
        "type": "integer",
        "value": "2",
        "description": "The integer constant CHARACTER_TYPE_C has the value 2\n\nUsed for mechanical character types or road going vehicles."
    },
    {
        "name": "CHARACTER_TYPE_D",
        "type": "integer",
        "value": "3",
        "description": "The integer constant CHARACTER_TYPE_D has the value 3\n\nUsed for character types that are not consistent with the A, B, or C type."
    },
    {
        "name": "CHARACTER_TYPE_NONE",
        "type": "integer",
        "value": "4",
        "description": "The integer constant CHARACTER_TYPE_NONE has the value 4\n\nUsed to set no specific character type."
    },
    {
        "name": "CLICK_ACTION_BUY",
        "type": "integer",
        "value": "2",
        "description": "The integer constant CLICK_ACTION_BUY has the value 2"
    },
    {
        "name": "CLICK_ACTION_NONE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant CLICK_ACTION_NONE has the value 0"
    },
    {
        "name": "CLICK_ACTION_OPEN",
        "type": "integer",
        "value": "4",
        "description": "The integer constant CLICK_ACTION_OPEN has the value 4"
    },
    {
        "name": "CLICK_ACTION_OPEN_MEDIA",
        "type": "integer",
        "value": "6",
        "description": "The integer constant CLICK_ACTION_OPEN_MEDIA has the value 6"
    },
    {
        "name": "CLICK_ACTION_PAY",
        "type": "integer",
        "value": "3",
        "description": "The integer constant CLICK_ACTION_PAY has the value 3"
    },
    {
        "name": "CLICK_ACTION_PLAY",
        "type": "integer",
        "value": "5",
        "description": "The integer constant CLICK_ACTION_PLAY has the value 5"
    },
    {
        "name": "CLICK_ACTION_SIT",
        "type": "integer",
        "value": "1",
        "description": "The integer constant CLICK_ACTION_SIT has the value 1"
    },
    {
        "name": "CLICK_ACTION_TOUCH",
        "type": "integer",
        "value": "8",
        "description": "The integer constant CLICK_ACTION_TOUCH has the value 8"
    },
    {
        "name": "CLICK_ACTION_TOUCH",
        "type": "integer",
        "value": "0",
        "description": "The integer constant CLICK_ACTION_TOUCH has the value 0"
    },
    {
        "name": "CLICK_ACTION_ZOOM",
        "type": "integer",
        "value": "7",
        "description": "The integer constant CLICK_ACTION_ZOOM has the value 7"
    },
    {
        "name": "CONTENT_TYPE_ATOM",
        "type": "integer",
        "value": "4",
        "description": "The integer constant CONTENT_TYPE_ATOM has the value 4\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/atom+xml\"."
    },
    {
        "name": "CONTENT_TYPE_FORM",
        "type": "integer",
        "value": "7",
        "description": "The integer constant CONTENT_TYPE_FORM has the value 7\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/x-www-form-urlencoded\"."
    },
    {
        "name": "CONTENT_TYPE_HTML",
        "type": "integer",
        "value": "1",
        "description": "The integer constant CONTENT_TYPE_HTML has the value 1\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"text/html\"."
    },
    {
        "name": "CONTENT_TYPE_JSON",
        "type": "integer",
        "value": "5",
        "description": "The integer constant CONTENT_TYPE_JSON has the value 5\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/json\"."
    },
    {
        "name": "CONTENT_TYPE_LLSD",
        "type": "integer",
        "value": "6",
        "description": "The integer constant CONTENT_TYPE_LLSD has the value 6\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/llsd+xml\"."
    },
    {
        "name": "CONTENT_TYPE_RSS",
        "type": "integer",
        "value": "8",
        "description": "The integer constant CONTENT_TYPE_RSS has the value 8\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/rss+xml\"."
    },
    {
        "name": "CONTENT_TYPE_TEXT",
        "type": "integer",
        "value": "0",
        "description": "The integer constant CONTENT_TYPE_TEXT has the value 0\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"text/plain\"."
    },
    {
        "name": "CONTENT_TYPE_XHTML",
        "type": "integer",
        "value": "3",
        "description": "The integer constant CONTENT_TYPE_XHTML has the value 3\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"application/xhtml+xml\"."
    },
    {
        "name": "CONTENT_TYPE_TEXT",
        "type": "integer",
        "value": "0",
        "description": "The integer constant CONTENT_TYPE_TEXT has the value 0\n\nSets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse to \"text/plain\"."
    },
    {
        "name": "CONTROL_BACK",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant CONTROL_BACK has the value 0x2"
    },
    {
        "name": "CONTROL_DOWN",
        "type": "integer",
        "value": "0x20",
        "description": "The integer constant CONTROL_DOWN has the value 0x20"
    },
    {
        "name": "CONTROL_FWD",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant CONTROL_FWD has the value 0x1"
    },
    {
        "name": "CONTROL_LBUTTON",
        "type": "integer",
        "value": "0x10000000",
        "description": "The integer constant CONTROL_LBUTTON has the value 0x10000000"
    },
    {
        "name": "CONTROL_LEFT",
        "type": "integer",
        "value": "0x4",
        "description": "The integer constant CONTROL_LEFT has the value 0x4"
    },
    {
        "name": "CONTROL_ML_LBUTTON",
        "type": "integer",
        "value": "0x40000000",
        "description": "The integer constant CONTROL_ML_LBUTTON has the value 0x40000000"
    },
    {
        "name": "CONTROL_RIGHT",
        "type": "integer",
        "value": "0x8",
        "description": "The integer constant CONTROL_RIGHT has the value 0x8"
    },
    {
        "name": "CONTROL_ROT_LEFT",
        "type": "integer",
        "value": "0x100",
        "description": "The integer constant CONTROL_ROT_LEFT has the value 0x100"
    },
    {
        "name": "CONTROL_ROT_RIGHT",
        "type": "integer",
        "value": "0x200",
        "description": "The integer constant CONTROL_ROT_RIGHT has the value 0x200"
    },
    {
        "name": "CONTROL_UP",
        "type": "integer",
        "value": "0x10",
        "description": "The integer constant CONTROL_UP has the value 0x10"
    },
    {
        "name": "DATA_BORN",
        "type": "integer",
        "value": "3",
        "description": "The integer constant DATA_BORN has the value 3\n\nUsed with llRequestAgentData to return a string that contains the date the user joined SL, it is the  ISO 8601 format of \"YYYY-MM-DD\". It is based on Pacific Time, not UTC."
    },
    {
        "name": "DATA_NAME",
        "type": "integer",
        "value": "2",
        "description": "The integer constant DATA_NAME has the value 2\n\nUsed with llRequestAgentData to return a string containing the avatars legacy name."
    },
    {
        "name": "DATA_ONLINE",
        "type": "integer",
        "value": "1",
        "description": "The integer constant DATA_ONLINE has the value 1\n\nUsed with llRequestAgentData to return a string that contains the integer boolean for if the user is online (or not). TRUE if online, FALSE if offline."
    },
    {
        "name": "DATA_PAYINFO",
        "type": "integer",
        "value": "8",
        "description": "The integer constant DATA_PAYINFO has the value 8\n\nUsed with llRequestAgentData to return a string that contains the integer mask that can contain either of these two constants: PAYMENT_INFO_ON_FILE, PAYMENT_INFO_USED"
    },
    {
        "name": "DATA_RATING",
        "type": "integer",
        "value": "4",
        "description": "The integer constant DATA_RATING has the value 4\n\nUsed with llRequestAgentData to return the string \"0, 0, 0, 0, 0, 0\".\nThe CSV list returned used to contain the positive and negative ratings the user has acquired before ratings were removed from SL."
    },
    {
        "name": "DATA_SIM_POS",
        "type": "integer",
        "value": "5",
        "description": "The integer constant DATA_SIM_POS has the value 5\n\nreturns vector in global coordinates"
    },
    {
        "name": "DATA_SIM_RATING",
        "type": "integer",
        "value": "7",
        "description": "The integer constant DATA_SIM_RATING has the value 7\n\nreturns string simulator rating \"PG\", \"MATURE\", \"ADULT\" or \"UNKNOWN\""
    },
    {
        "name": "DATA_SIM_STATUS",
        "type": "integer",
        "value": "6",
        "description": "The integer constant DATA_SIM_STATUS has the value 6\n\nReturns one of these strings."
    },
    {
        "name": "DEBUG_CHANNEL",
        "type": "integer",
        "value": "0x7FFFFFFF",
        "description": "The integer constant DEBUG_CHANNEL has the value 0x7FFFFFFF\n\nChat channel reserved for script debugging and error messages. The client will display chat on this channel in the script console if the avatar is within the appropriate distance for the communication type (see Chat for details)."
    },
    {
        "name": "DEG_TO_RAD",
        "type": "float",
        "value": "0.017453292519943295769236907684886f",
        "description": "The float constant DEG_TO_RAD has the value 0.017453292519943295769236907684886f"
    },
    {
        "name": "EOF",
        "type": "string",
        "value": "\"\\n\\n\\n\"",
        "description": "The string constant EOF has the value \"\\n\\n\\n\"\n\nEOF is a value returned by the dataserver event, as a result of a call to llGetNotecardLine, specifically when the requested line is past the end of the notecard. The value returned equals \"\\n\\n\\n\", which is to say, three newline characters (0x0a)."
    },
    {
        "name": "ERR_GENERIC",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant ERR_GENERIC has the value -1\n\n"
    },
    {
        "name": "ERR_MALFORMED_PARAMS",
        "type": "integer",
        "value": "-3",
        "description": "The integer constant ERR_MALFORMED_PARAMS has the value -3\n\nReturn Value for llReturnObject* functions. Indicates function Parameters are malformed."
    },
    {
        "name": "ERR_PARCEL_PERMISSIONS",
        "type": "integer",
        "value": "-2",
        "description": "The integer constant ERR_PARCEL_PERMISSIONS has the value -2\n\nReturn Value for llReturnObject* functions. Indicates Permission lacked to perform task on specified parcel."
    },
    {
        "name": "ERR_RUNTIME_PERMISSIONS",
        "type": "integer",
        "value": "-4",
        "description": "The integer constant ERR_RUNTIME_PERMISSIONS has the value -4\n\nReturn Value for llReturnObject* functions. Indicates Script lacks the runtime permission to perform the requested task."
    },
    {
        "name": "ERR_THROTTLED",
        "type": "integer",
        "value": "-5",
        "description": "The integer constant ERR_THROTTLED has the value -5\n\nReturn Value for llReturnObject* functions. Indicates Task has been throttled. Try again later."
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_AGENT_ADD",
        "type": "integer",
        "value": "4",
        "description": "The integer constant ESTATE_ACCESS_ALLOWED_AGENT_ADD has the value 4\n\nUsed in input parameters of llManageEstateAccess . Add an agent to this estate's Allowed Residents list"
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_AGENT_REMOVE",
        "type": "integer",
        "value": "8",
        "description": "The integer constant ESTATE_ACCESS_ALLOWED_AGENT_REMOVE has the value 8\n\nUsed in input parameters of llManageEstateAccess . Remove an agent to this estate's Allowed Residents list"
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_GROUP_ADD",
        "type": "integer",
        "value": "16",
        "description": "The integer constant ESTATE_ACCESS_ALLOWED_GROUP_ADD has the value 16\n\nUsed in input parameters of llManageEstateAccess .Add a group to this estate's Allowed groups list."
    },
    {
        "name": "ESTATE_ACCESS_ALLOWED_GROUP_REMOVE",
        "type": "integer",
        "value": "32",
        "description": "The integer constant ESTATE_ACCESS_ALLOWED_GROUP_REMOVE has the value 32\n\nUsed in input parameters of llManageEstateAccess . Remove the group from this estate's Allowed groups list."
    },
    {
        "name": "ESTATE_ACCESS_BANNED_AGENT_ADD",
        "type": "integer",
        "value": "64",
        "description": "The integer constant ESTATE_ACCESS_BANNED_AGENT_ADD has the value 64\n\nUsed in input parameters of llManageEstateAccess. Add the agent to this estate's Banned residents list."
    },
    {
        "name": "ESTATE_ACCESS_BANNED_AGENT_REMOVE",
        "type": "integer",
        "value": "128",
        "description": "The integer constant ESTATE_ACCESS_BANNED_AGENT_REMOVE has the value 128\n\nUsed in input parameters of llManageEstateAccess . Remove the agent from this estate's Banned residents list."
    },
    {
        "name": "FALSE",
        "type": "integer",
        "value": "0",
        "description": "The boolean integer constant FALSE has the value 0\n\nConstant used to define the FALSE value in conditional structures or variables/constants in general. Usually it's used because it is more readable, indicating a boolean value instead a integer value (0)."
    },
    {
        "name": "FORCE_DIRECT_PATH",
        "type": "integer",
        "value": "1",
        "description": "The integer constant FORCE_DIRECT_PATH has the value 1"
    },
    {
        "name": "HORIZONTAL",
        "type": "integer",
        "value": "1",
        "description": "The integer constant HORIZONTAL has the value 1\n\nConstant to indicate that the orientation of the capsule for a Pathfinding character is horizontal."
    },
    {
        "name": "HTTP_ACCEPT",
        "type": "integer",
        "value": "8",
        "description": "The integer constant HTTP_ACCEPT has the value 8"
    },
    {
        "name": "HTTP_BODY_MAXLENGTH",
        "type": "integer",
        "value": "2",
        "description": "The integer constant HTTP_BODY_MAXLENGTH has the value 2\n\nUsed with llHTTPRequest to set the maximum size the script will accept* for an HTTP body. The largest value this can be set to depends upon the VM that is being used."
    },
    {
        "name": "HTTP_BODY_TRUNCATED",
        "type": "integer",
        "value": "0",
        "description": "The integer constant HTTP_BODY_TRUNCATED has the value 0\n\nTruncation point in bytes"
    },
    {
        "name": "HTTP_CUSTOM_HEADER",
        "type": "integer",
        "value": "5",
        "description": "The integer constant HTTP_CUSTOM_HEADER has the value 5"
    },
    {
        "name": "HTTP_METHOD",
        "type": "integer",
        "value": "0",
        "description": "The integer constant HTTP_METHOD has the value 0"
    },
    {
        "name": "HTTP_MIMETYPE",
        "type": "integer",
        "value": "1",
        "description": "The integer constant HTTP_MIMETYPE has the value 1"
    },
    {
        "name": "HTTP_PRAGMA_NO_CACHE",
        "type": "integer",
        "value": "6",
        "description": "The integer constant HTTP_PRAGMA_NO_CACHE has the value 6"
    },
    {
        "name": "HTTP_USER_AGENT",
        "type": "integer",
        "value": "7",
        "description": "The integer constant HTTP_USER_AGENT has the value 7"
    },
    {
        "name": "HTTP_VERBOSE_THROTTLE",
        "type": "integer",
        "value": "4",
        "description": "The integer constant HTTP_VERBOSE_THROTTLE has the value 4"
    },
    {
        "name": "HTTP_VERIFY_CERT",
        "type": "integer",
        "value": "3",
        "description": "The integer constant HTTP_VERIFY_CERT has the value 3"
    },
    {
        "name": "INVENTORY_ALL",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant INVENTORY_ALL has the value -1\n\nUsed with Inventory functions and specifies ALL TYPES of inventory items will be retrieved by the function."
    },
    {
        "name": "INVENTORY_ANIMATION",
        "type": "integer",
        "value": "20",
        "description": "The integer constant INVENTORY_ANIMATION has the value 20\n\nUsed with Inventory functions and specifies inventory items of ANIMATION type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_BODYPART",
        "type": "integer",
        "value": "13",
        "description": "The integer constant INVENTORY_BODYPART has the value 13\n\nUsed with Inventory functions and specifies inventory items of BODYPART type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_CLOTHING",
        "type": "integer",
        "value": "5",
        "description": "The integer constant INVENTORY_CLOTHING has the value 5\n\nUsed with Inventory functions and specifies inventory items of CLOTHING type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_GESTURE",
        "type": "integer",
        "value": "21",
        "description": "The integer constant INVENTORY_GESTURE has the value 21\n\nUsed with Inventory functions and specifies inventory items of GESTURE type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_LANDMARK",
        "type": "integer",
        "value": "3",
        "description": "The integer constant INVENTORY_LANDMARK has the value 3\n\nUsed with Inventory functions and specifies inventory items of LANDMARK type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_MATERIAL",
        "type": "integer",
        "value": "57",
        "description": "The integer constant INVENTORY_MATERIAL has the value 57\n\nUsed with Inventory functions and specifies inventory items of MATERIAL type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_NONE",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant INVENTORY_NONE has the value -1\n\nValue returned by Inventory functions, to indicate that the inventory item doesn't exist."
    },
    {
        "name": "INVENTORY_NOTECARD",
        "type": "integer",
        "value": "7",
        "description": "The integer constant INVENTORY_NOTECARD has the value 7\n\nUsed with Inventory functions and specifies inventory items of NOTECARD type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_OBJECT",
        "type": "integer",
        "value": "6",
        "description": "The integer constant INVENTORY_OBJECT has the value 6\n\nUsed with Inventory functions and specifies inventory items of OBJECT type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_SCRIPT",
        "type": "integer",
        "value": "10",
        "description": "The integer constant INVENTORY_SCRIPT has the value 10\n\nUsed with Inventory functions and specifies inventory items of SCRIPT type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_SETTING",
        "type": "integer",
        "value": "56",
        "description": "The integer constant INVENTORY_SETTING has the value 56\n\nUsed with Inventory functions and specifies inventory items of SETTING type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_SOUND",
        "type": "integer",
        "value": "1",
        "description": "The integer constant INVENTORY_SOUND has the value 1\n\nUsed with Inventory functions and specifies inventory items of SOUND type will be retrieved by the function."
    },
    {
        "name": "INVENTORY_TEXTURE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant INVENTORY_TEXTURE has the value 0\n\nUsed with Inventory functions and specifies inventory items of TEXTURE type will be retrieved by the function."
    },
    {
        "name": "JSON_APPEND",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant JSON_APPEND has the value -1\n\nA special specifier for llJsonSetValue which indicates the given value should be appended to the array at the specified level.\nCare should be taken, as if the value at that level is not an array, the existing data will be overwritten and replaced with the array meant for appending."
    },
    {
        "name": "JSON_ARRAY",
        "type": "string",
        "value": "\"﷒\"",
        "description": "The string constant JSON_ARRAY has the value \"﷒\"\n\nUsed with the llList2Json function to indicate that the provided list (which may be empty) is to be used to encode and return a string serialization of a Json array."
    },
    {
        "name": "JSON_DELETE",
        "type": "string",
        "value": "\"�\"",
        "description": "The string constant JSON_DELETE has the value \"�\"\n\nA constant used to delete a value within a JSON text string."
    },
    {
        "name": "JSON_FALSE",
        "type": "string",
        "value": "\"�\"",
        "description": "The string constant JSON_FALSE has the value \"�\"\n\nReturn value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object."
    },
    {
        "name": "JSON_INVALID",
        "type": "string",
        "value": "\"﷐\"",
        "description": "The string constant JSON_INVALID has the value \"﷐\"\n\nA return value that indicates an invalid 'type' was specified to the llList2Json function.\nAlso a return value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object.\nAlso a return value for llJsonGetValue to signify a specifier list attempting to access a nonexistent location within a Json text (see Examples)."
    },
    {
        "name": "JSON_NULL",
        "type": "string",
        "value": "\"�\"",
        "description": "The string constant JSON_NULL has the value \"�\"\n\nReturn value for llJsonValueType function indicating the Json data type of a given address specifier in a given string-serialized JSON text."
    },
    {
        "name": "JSON_NUMBER",
        "type": "string",
        "value": "\"�\"",
        "description": "The string constant JSON_NUMBER has the value \"�\"\n\nReturn value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object."
    },
    {
        "name": "JSON_OBJECT",
        "type": "string",
        "value": "\"﷑\"",
        "description": "The string constant JSON_OBJECT has the value \"﷑\"\n\nUsed with the llList2Json function to indicate that the list provided is a strided list of \"Key\", Value pairs (which may be empty), and that a string representing a Json object will be returned."
    },
    {
        "name": "JSON_STRING",
        "type": "string",
        "value": "\"�\"",
        "description": "The string constant JSON_STRING has the value \"�\"\n\nReturn value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object."
    },
    {
        "name": "JSON_TRUE",
        "type": "string",
        "value": "\"�\"",
        "description": "The string constant JSON_TRUE has the value \"�\"\n\nReturn value for llJsonValueType function indicating the data type of a given address specifier in a given string-serialized JSON object."
    },
    {
        "name": "KFM_CMD_PAUSE",
        "type": "integer",
        "value": "2",
        "description": "The integer constant KFM_CMD_PAUSE has the value 2\n\nCommand used in the options parameter llSetKeyframedMotion .Stops the animation but doesn t reset it at the start of motion."
    },
    {
        "name": "KFM_CMD_PLAY",
        "type": "integer",
        "value": "0",
        "description": "The integer constant KFM_CMD_PLAY has the value 0\n\nCommand used in the options parameter llSetKeyframedMotion .Resumes the animation previously stopped by KFM_CMD_STOP or KFM_CMD_PAUSE"
    },
    {
        "name": "KFM_CMD_STOP",
        "type": "integer",
        "value": "1",
        "description": "The integer constant KFM_CMD_STOP has the value 1\n\nCommand used in the options parameter llSetKeyframedMotion .Stops the animation and resets it at the start of motion."
    },
    {
        "name": "KFM_COMMAND",
        "type": "integer",
        "value": "0",
        "description": "The integer constant KFM_COMMAND has the value 0\n\nCommand used in the options parameter of  llSetKeyframedMotion .followed by one of: KFM_CMD_STOP, KFM_CMD_PLAY, KFM_CMD_PAUSE to play , stop or pause the motion ."
    },
    {
        "name": "KFM_DATA",
        "type": "integer",
        "value": "2",
        "description": "The integer constant KFM_DATA has the value 2\n\nFlag used in the options parameter llSetKeyframedMotion : is a flag  followed by a bitwise combination of: KFM_TRANSLATION and KFM_ROTATION. If absent,  both rotations and translations must be provided in the first parameter of llSetKeyframedMotion ."
    },
    {
        "name": "KFM_FORWARD",
        "type": "integer",
        "value": "0",
        "description": "The integer constant KFM_FORWARD has the value 0\n\nspecify the playback mode used in llSetKeyframedMotion . It s the default playback mode . It plays the frames in this order frame1, frame2 .. frame N And stops after"
    },
    {
        "name": "KFM_LOOP",
        "type": "integer",
        "value": "1",
        "description": "The integer constant KFM_LOOP has the value 1\n\nspecify the playback mode used in llSetKeyframedMotion : will play the frames in the order  number 1 , number 2 ... number N , returns tothe intitial position , plays number 1 , nummber 2 .."
    },
    {
        "name": "KFM_MODE",
        "type": "integer",
        "value": "1",
        "description": "The integer constant KFM_MODE has the value 1\n\nused in llSetKeyframedMotion .   followed by one of: KFM_LOOP, KFM_REVERSE, KFM_FORWARD, or KFM_PING_PONG will specify the playback mode. Defaults to KFM_FORWARD. Must be specified when the keyframe list is provided."
    },
    {
        "name": "KFM_PING_PONG",
        "type": "integer",
        "value": "2",
        "description": "The integer constant KFM_PING_PONG has the value 2\n\nspecify the playback mode used in llSetKeyframedMotion"
    },
    {
        "name": "KFM_REVERSE",
        "type": "integer",
        "value": "3",
        "description": "The integer constant KFM_REVERSE has the value 3\n\nspecify the playback mode used in llSetKeyframedMotion .  It plays the frames in this order frameN, frameN-1 .. frame 2 , frame 1 . And stops after"
    },
    {
        "name": "KFM_ROTATION",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant KFM_ROTATION has the value 0x1\n\nSpecifies the type of data in the list of moves for llSetKeyframedMotion"
    },
    {
        "name": "KFM_TRANSLATION",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant KFM_TRANSLATION has the value 0x2\n\nspecifies the type of data in the list of moves for the function llSetKeyframedMotion"
    },
    {
        "name": "LAND_LEVEL",
        "type": "integer",
        "value": "0",
        "description": "The integer constant LAND_LEVEL has the value 0"
    },
    {
        "name": "LAND_LOWER",
        "type": "integer",
        "value": "2",
        "description": "The integer constant LAND_LOWER has the value 2"
    },
    {
        "name": "LAND_NOISE",
        "type": "integer",
        "value": "4",
        "description": "The integer constant LAND_NOISE has the value 4\n\nRandomize the land - makes it rough"
    },
    {
        "name": "LAND_RAISE",
        "type": "integer",
        "value": "1",
        "description": "The integer constant LAND_RAISE has the value 1"
    },
    {
        "name": "LAND_REVERT",
        "type": "integer",
        "value": "5",
        "description": "The integer constant LAND_REVERT has the value 5"
    },
    {
        "name": "LAND_SMOOTH",
        "type": "integer",
        "value": "3",
        "description": "The integer constant LAND_SMOOTH has the value 3"
    },
    {
        "name": "LINK_ALL_CHILDREN",
        "type": "integer",
        "value": "-3",
        "description": "The integer constant LINK_ALL_CHILDREN has the value -3"
    },
    {
        "name": "LINK_ALL_OTHERS",
        "type": "integer",
        "value": "-2",
        "description": "The integer constant LINK_ALL_OTHERS has the value -2\n\nThis does the opposite of LINK_THIS"
    },
    {
        "name": "LINK_ROOT",
        "type": "integer",
        "value": "1",
        "description": "The integer constant LINK_ROOT has the value 1"
    },
    {
        "name": "LINK_SET",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant LINK_SET has the value -1"
    },
    {
        "name": "LINK_THIS",
        "type": "integer",
        "value": "-4",
        "description": "The integer constant LINK_THIS has the value -4\n\nCauses the script to act only upon the prim the script is in. "
    },
    {
        "name": "LIST_STAT_GEOMETRIC_MEAN",
        "type": "integer",
        "value": "9",
        "description": "The integer constant LIST_STAT_GEOMETRIC_MEAN has the value 9\n\nReturns the geometric mean of a list of numbers."
    },
    {
        "name": "LIST_STAT_MAX",
        "type": "integer",
        "value": "2",
        "description": "The integer constant LIST_STAT_MAX has the value 2\n\nRetrieves the largest number in the list."
    },
    {
        "name": "LIST_STAT_MEAN",
        "type": "integer",
        "value": "3",
        "description": "The integer constant LIST_STAT_MEAN has the value 3\n\nCalculates the mean (average) of the numbers in the list."
    },
    {
        "name": "LIST_STAT_MEDIAN",
        "type": "integer",
        "value": "4",
        "description": "The integer constant LIST_STAT_MEDIAN has the value 4\n\nCalculates the median number in the list."
    },
    {
        "name": "LIST_STAT_MIN",
        "type": "integer",
        "value": "1",
        "description": "The integer constant LIST_STAT_MIN has the value 1\n\nRetrieves the smallest number in the list."
    },
    {
        "name": "LIST_STAT_NUM_COUNT",
        "type": "integer",
        "value": "8",
        "description": "The integer constant LIST_STAT_NUM_COUNT has the value 8\n\nRetrieves the number of float and integer elements."
    },
    {
        "name": "LIST_STAT_RANGE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant LIST_STAT_RANGE has the value 0\n\nCalculates the range of the list. (max - min)"
    },
    {
        "name": "LIST_STAT_STD_DEV",
        "type": "integer",
        "value": "5",
        "description": "The integer constant LIST_STAT_STD_DEV has the value 5\n\nCalculates the sample standard deviation of a list of numbers."
    },
    {
        "name": "LIST_STAT_SUM",
        "type": "integer",
        "value": "6",
        "description": "The integer constant LIST_STAT_SUM has the value 6\n\nCalculates the sum of the numbers in a list."
    },
    {
        "name": "LIST_STAT_SUM_SQUARES",
        "type": "integer",
        "value": "7",
        "description": "The integer constant LIST_STAT_SUM_SQUARES has the value 7\n\nCalculates the sum of the squares of the numbers in a list."
    },
    {
        "name": "LOOP",
        "type": "integer",
        "value": "0x02",
        "description": "The integer constant LOOP has the value 0x02"
    },
    {
        "name": "MASK_BASE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant MASK_BASE has the value 0"
    },
    {
        "name": "MASK_EVERYONE",
        "type": "integer",
        "value": "3",
        "description": "The integer constant MASK_EVERYONE has the value 3"
    },
    {
        "name": "MASK_GROUP",
        "type": "integer",
        "value": "2",
        "description": "The integer constant MASK_GROUP has the value 2"
    },
    {
        "name": "MASK_NEXT",
        "type": "integer",
        "value": "4",
        "description": "The integer constant MASK_NEXT has the value 4"
    },
    {
        "name": "MASK_OWNER",
        "type": "integer",
        "value": "1",
        "description": "The integer constant MASK_OWNER has the value 1"
    },
    {
        "name": "NULL_KEY",
        "type": "string",
        "value": "\"00000000-0000-0000-0000-000000000000\"",
        "description": "The string constant NULL_KEY has the value \"00000000-0000-0000-0000-000000000000\"\n\nNULL_KEY is a string. However it is only really useful as a key."
    },
    {
        "name": "OBJECT_ATTACHED_POINT",
        "type": "integer",
        "value": "19",
        "description": "The integer constant OBJECT_ATTACHED_POINT has the value 19\n\nUsed with llGetObjectDetails, returns the value llGetAttached would return."
    },
    {
        "name": "OBJECT_ATTACHED_SLOTS_AVAILABLE",
        "type": "integer",
        "value": "35",
        "description": "The integer constant OBJECT_ATTACHED_SLOTS_AVAILABLE has the value 35\n\nThis is a flag used with llGetObjectDetails to gets the avatar's available attachment slot count."
    },
    {
        "name": "OBJECT_BODY_SHAPE_TYPE",
        "type": "integer",
        "value": "26",
        "description": "The integer constant OBJECT_BODY_SHAPE_TYPE has the value 26\n\nThis is a flag used with llGetObjectDetails to get the \"gender\" setting of an avatar's currently worn shape."
    },
    {
        "name": "OBJECT_CHARACTER_TIME",
        "type": "integer",
        "value": "17",
        "description": "The integer constant OBJECT_CHARACTER_TIME has the value 17\n\nThis is a flag used with llGetObjectDetails to get the average CPU time (in seconds) used by the object for navigation, if the object is a pathfinding character. See Viewerhelp:Pathfinding_characters"
    },
    {
        "name": "OBJECT_CLICK_ACTION",
        "type": "integer",
        "value": "28",
        "description": "The integer constant OBJECT_CLICK_ACTION has the value 28\n\nThis is a flag used with llGetObjectDetails to get the prim Click Action."
    },
    {
        "name": "OBJECT_CREATOR",
        "type": "integer",
        "value": "8",
        "description": "The integer constant OBJECT_CREATOR has the value 8\n\nThis is a flag used with llGetObjectDetails to get the object creator key."
    },
    {
        "name": "OBJECT_DESC",
        "type": "integer",
        "value": "2",
        "description": "The integer constant OBJECT_DESC has the value 2\n\nThis is a flag used with llGetObjectDetails to get the object description."
    },
    {
        "name": "OBJECT_GROUP",
        "type": "integer",
        "value": "7",
        "description": "The integer constant OBJECT_GROUP has the value 7\n\nThis is a flag used with llGetObjectDetails to get the object group key."
    },
    {
        "name": "OBJECT_GROUP_TAG",
        "type": "integer",
        "value": "33",
        "description": "The integer constant OBJECT_GROUP_TAG has the value 33\n\nThis is a flag used with llGetObjectDetails to get the active group tag/title of the avatar defined in key."
    },
    {
        "name": "OBJECT_HOVER_HEIGHT",
        "type": "integer",
        "value": "25",
        "description": "The integer constant OBJECT_HOVER_HEIGHT has the value 25\n\nThis is a flag used with llGetObjectDetails to get the hover height of the avatar."
    },
    {
        "name": "OBJECT_LAST_OWNER_ID",
        "type": "integer",
        "value": "27",
        "description": "The integer constant OBJECT_LAST_OWNER_ID has the value 27\n\nThis is a flag used with llGetObjectDetails to get the last object owner key (if known)."
    },
    {
        "name": "OBJECT_NAME",
        "type": "integer",
        "value": "1",
        "description": "The integer constant OBJECT_NAME has the value 1\n\nThis is a flag used with llGetObjectDetails to get the object name."
    },
    {
        "name": "OBJECT_OMEGA",
        "type": "integer",
        "value": "29",
        "description": "The integer constant OBJECT_OMEGA has the value 29\n\nUsed with llGetObjectDetails to get the objects rotational velocity."
    },
    {
        "name": "OBJECT_OMEGA",
        "type": "integer",
        "value": "29",
        "description": "The integer constant OBJECT_OMEGA has the value 29\n\nUsed with llGetObjectDetails to get the objects rotational velocity."
    },
    {
        "name": "OBJECT_PATHFINDING_TYPE",
        "type": "integer",
        "value": "20",
        "description": "The integer constant OBJECT_PATHFINDING_TYPE has the value 20"
    },
    {
        "name": "OBJECT_PHANTOM",
        "type": "integer",
        "value": "22",
        "description": "The integer constant OBJECT_PHANTOM has the value 22\n\nThis is a flag used with llGetObjectDetails to get the object's phantom attribute."
    },
    {
        "name": "OBJECT_PHYSICS",
        "type": "integer",
        "value": "21",
        "description": "The integer constant OBJECT_PHYSICS has the value 21\n\nThis is a flag used with llGetObjectDetails to get the object's physics attribute."
    },
    {
        "name": "OBJECT_PHYSICS_COST",
        "type": "integer",
        "value": "16",
        "description": "The integer constant OBJECT_PHYSICS_COST has the value 16\n\nThis is a flag used with llGetObjectDetails to get the physics cost of the object."
    },
    {
        "name": "OBJECT_POS",
        "type": "integer",
        "value": "3",
        "description": "The integer constant OBJECT_POS has the value 3\n\nThis is a flag used with llGetObjectDetails to get the object position."
    },
    {
        "name": "OBJECT_PRIM_COUNT",
        "type": "integer",
        "value": "30",
        "description": "The integer constant OBJECT_PRIM_COUNT has the value 30\n\nThis is a flag used with llGetObjectDetails to get the object's prim count."
    },
    {
        "name": "OBJECT_PRIM_EQUIVALENCE",
        "type": "integer",
        "value": "13",
        "description": "The integer constant OBJECT_PRIM_EQUIVALENCE has the value 13\n\nThis is a flag used with llGetObjectDetails to get the prim equivalence of the object."
    },
    {
        "name": "OBJECT_RENDER_WEIGHT",
        "type": "integer",
        "value": "24",
        "description": "The integer constant OBJECT_RENDER_WEIGHT has the value 24\n\nThis is a flag used with llGetObjectDetails to get the Avatar_Rendering_Cost of an avatar, based on values reported by nearby viewers.  If no data is available, -1 is returned.  The maximum render weight stored by the simulator is 500000.  When called against an object, 0 is returned."
    },
    {
        "name": "OBJECT_RETURN_PARCEL",
        "type": "integer",
        "value": "1",
        "description": "The integer constant OBJECT_RETURN_PARCEL has the value 1\n\nFor llReturnObjectsByOwner, sets the scope to return all objects on the same parcel as the script which are owned by 'owner'. The script must be owned by an estate manager or over a parcel owned by the owner of the script."
    },
    {
        "name": "OBJECT_RETURN_PARCEL_OWNER",
        "type": "integer",
        "value": "2",
        "description": "The integer constant OBJECT_RETURN_PARCEL_OWNER has the value 2\n\nFor llReturnObjectsByOwner, sets the scope to return all objects owned by 'owner' which are over parcels owned by the owner of the script."
    },
    {
        "name": "OBJECT_RETURN_REGION",
        "type": "integer",
        "value": "4",
        "description": "The integer constant OBJECT_RETURN_REGION has the value 4\n\nFor llReturnObjectsByOwner, sets the scope to return all objects in the region owned by 'owner' - only works when the script is owned by the estate owner or an estate manager."
    },
    {
        "name": "OBJECT_ROOT",
        "type": "integer",
        "value": "18",
        "description": "The integer constant OBJECT_ROOT has the value 18"
    },
    {
        "name": "OBJECT_ROT",
        "type": "integer",
        "value": "4",
        "description": "The integer constant OBJECT_ROT has the value 4\n\nThis is a flag used with llGetObjectDetails to get the object rotation."
    },
    {
        "name": "OBJECT_RUNNING_SCRIPT_COUNT",
        "type": "integer",
        "value": "9",
        "description": "The integer constant OBJECT_RUNNING_SCRIPT_COUNT has the value 9\n\nThis is a flag used with llGetObjectDetails to get the number of running scripts."
    },
    {
        "name": "OBJECT_SCRIPT_MEMORY",
        "type": "integer",
        "value": "11",
        "description": "The integer constant OBJECT_SCRIPT_MEMORY has the value 11\n\nThis is a flag used with llGetObjectDetails to get the amount of allocated memory in bytes."
    },
    {
        "name": "OBJECT_SCRIPT_TIME",
        "type": "integer",
        "value": "12",
        "description": "The integer constant OBJECT_SCRIPT_TIME has the value 12\n\nThis is a flag used with llGetObjectDetails to get the average CPU time (in seconds) used by scripts in an object or agent.  Like top scripts, the  time reported is the average script time per frame for the last 30 minutes for all scripts on the object. If the object has been in the region for less than 30 minutes, the number reported will be the average time per frame since the object entered the region."
    },
    {
        "name": "OBJECT_SELECT_COUNT",
        "type": "integer",
        "value": "37",
        "description": "The integer constant OBJECT_SELECT_COUNT has the value 37\n\nThis is a flag used with llGetObjectDetails to get the total number of agents selecting any links in the object."
    },
    {
        "name": "OBJECT_SERVER_COST",
        "type": "integer",
        "value": "14",
        "description": "The integer constant OBJECT_SERVER_COST has the value 14\n\nThis is a flag used with llGetObjectDetails to get the object cost of the object."
    },
    {
        "name": "OBJECT_STREAMING_COST",
        "type": "integer",
        "value": "15",
        "description": "The integer constant OBJECT_STREAMING_COST has the value 15\n\nThis is a flag used with llGetObjectDetails to get the streaming/download cost of the object."
    },
    {
        "name": "OBJECT_TEMP_ON_REZ",
        "type": "integer",
        "value": "23",
        "description": "The integer constant OBJECT_TEMP_ON_REZ has the value 23\n\nThis is a flag used with llGetObjectDetails to get the object's temporary attribute."
    },
    {
        "name": "OBJECT_TOTAL_INVENTORY_COUNT",
        "type": "integer",
        "value": "31",
        "description": "The integer constant OBJECT_TOTAL_INVENTORY_COUNT has the value 31\n\nThis is a flag used with llGetObjectDetails to get the object's total number of inventory items."
    },
    {
        "name": "OBJECT_TOTAL_SCRIPT_COUNT",
        "type": "integer",
        "value": "10",
        "description": "The integer constant OBJECT_TOTAL_SCRIPT_COUNT has the value 10\n\nThis is a flag used with llGetObjectDetails to get the total number of scripts, running or not."
    },
    {
        "name": "OBJECT_UNKNOWN_DETAIL",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant OBJECT_UNKNOWN_DETAIL has the value -1\n\nThis is a flag returned by llGetObjectDetails when it is passed an invalid flag."
    },
    {
        "name": "OBJECT_VELOCITY",
        "type": "integer",
        "value": "5",
        "description": "The integer constant OBJECT_VELOCITY has the value 5\n\nThis is a flag used with llGetObjectDetails to get the object velocity."
    },
    {
        "name": "OPT_CHARACTER",
        "type": "integer",
        "value": "2",
        "description": "The integer constant OPT_CHARACTER has the value 2"
    },
    {
        "name": "OPT_AVATAR",
        "type": "integer",
        "value": "1",
        "description": "The integer constant OPT_AVATAR has the value 1"
    },
    {
        "name": "OPT_EXCLUSION_VOLUME",
        "type": "integer",
        "value": "6",
        "description": "The integer constant OPT_EXCLUSION_VOLUME has the value 6"
    },
    {
        "name": "OPT_LEGACY_LINKSET",
        "type": "integer",
        "value": "0",
        "description": "The integer constant OPT_LEGACY_LINKSET has the value 0"
    },
    {
        "name": "OPT_MATERIAL_VOLUME",
        "type": "integer",
        "value": "5",
        "description": "The integer constant OPT_MATERIAL_VOLUME has the value 5"
    },
    {
        "name": "OPT_OTHER",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant OPT_OTHER has the value -1"
    },
    {
        "name": "OPT_STATIC_OBSTACLE",
        "type": "integer",
        "value": "4",
        "description": "The integer constant OPT_STATIC_OBSTACLE has the value 4"
    },
    {
        "name": "OPT_WALKABLE",
        "type": "integer",
        "value": "3",
        "description": "The integer constant OPT_WALKABLE has the value 3"
    },
    {
        "name": "PARCEL_COUNT_GROUP",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PARCEL_COUNT_GROUP has the value 2\n\nUsed with llGetParcelPrimCount to get the total land impact of objects shared with or owned by the parcel group."
    },
    {
        "name": "PARCEL_COUNT_OTHER",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PARCEL_COUNT_OTHER has the value 3\n\nUsed with llGetParcelPrimCount to get the land impact of all objects that are not owned by the parcel owner or shared with or owned by the group."
    },
    {
        "name": "PARCEL_COUNT_OWNER",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PARCEL_COUNT_OWNER has the value 1\n\nUsed with llGetParcelPrimCount to get the total land impact of objects owned by the parcel owner."
    },
    {
        "name": "PARCEL_COUNT_SELECTED",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PARCEL_COUNT_SELECTED has the value 4\n\nUsed with llGetParcelPrimCount to get the total land impact of all objects selected or sat on."
    },
    {
        "name": "PARCEL_COUNT_TEMP",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PARCEL_COUNT_TEMP has the value 5\n\nUsed with llGetParcelPrimCount to get the total land impact of temporary objects."
    },
    {
        "name": "PARCEL_COUNT_TOTAL",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PARCEL_COUNT_TOTAL has the value 0\n\nUsed with llGetParcelPrimCount to return total object land impact used on the parcel(s). Does not include temporary objects."
    },
    {
        "name": "PARCEL_DETAILS_AREA",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PARCEL_DETAILS_AREA has the value 4\n\nThis is a flag used with llGetParcelDetails to get the parcel size in sqm (m2)."
    },
    {
        "name": "PARCEL_DETAILS_DESC",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PARCEL_DETAILS_DESC has the value 1\n\nThis is a flag used with llGetParcelDetails to get the parcel description."
    },
    {
        "name": "PARCEL_DETAILS_FLAGS",
        "type": "integer",
        "value": "12",
        "description": "The integer constant PARCEL_DETAILS_FLAGS has the value 12\n\nUsed with llGetParcelDetails, see llGetParcelFlags for the meaning of the returned flags."
    },
    {
        "name": "PARCEL_DETAILS_GROUP",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PARCEL_DETAILS_GROUP has the value 3\n\nThis is a flag used with llGetParcelDetails to get the group key of the parcel."
    },
    {
        "name": "PARCEL_DETAILS_ID",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PARCEL_DETAILS_ID has the value 5\n\nThis is a flag used with llGetParcelDetails to get the parcel UUID."
    },
    {
        "name": "PARCEL_DETAILS_NAME",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PARCEL_DETAILS_NAME has the value 0\n\nThis is a flag used with llGetParcelDetails to get the parcel name."
    },
    {
        "name": "PARCEL_DETAILS_OWNER",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PARCEL_DETAILS_OWNER has the value 2\n\nThis is a flag used with llGetParcelDetails to get the parcel owner key."
    },
    {
        "name": "PARCEL_DETAILS_SEE_AVATARS",
        "type": "integer",
        "value": "6",
        "description": "The integer constant PARCEL_DETAILS_SEE_AVATARS has the value 6\n\nThis is a flag used with llGetParcelDetails to get the \"See and chat with residents on this parcel\" setting."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_ALL_OBJECT_ENTRY",
        "type": "integer",
        "value": "0x8000000",
        "description": "The integer constant PARCEL_FLAG_ALLOW_ALL_OBJECT_ENTRY has the value 0x8000000\n\nThis is a flag used with llGetParcelFlags to check if objects are allowed to enter the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_CREATE_GROUP_OBJECTS",
        "type": "integer",
        "value": "0x4000000",
        "description": "The integer constant PARCEL_FLAG_ALLOW_CREATE_GROUP_OBJECTS has the value 0x4000000\n\nThis is a flag used with llGetParcelFlags to check if scripts in group deeded objects are allowed to rez new objects in the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_CREATE_OBJECTS",
        "type": "integer",
        "value": "0x40",
        "description": "The integer constant PARCEL_FLAG_ALLOW_CREATE_OBJECTS has the value 0x40\n\nThis is a flag used with llGetParcelFlags to check if anyone can create objects on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_DAMAGE",
        "type": "integer",
        "value": "0x20",
        "description": "The integer constant PARCEL_FLAG_ALLOW_DAMAGE has the value 0x20\n\nThis is a flag used with llGetParcelFlags to check if damage is enabled on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_FLY",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant PARCEL_FLAG_ALLOW_FLY has the value 0x1\n\nThis is a flag used with llGetParcelFlags to check if flying is allowed on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_GROUP_OBJECT_ENTRY",
        "type": "integer",
        "value": "0x10000000",
        "description": "The integer constant PARCEL_FLAG_ALLOW_GROUP_OBJECT_ENTRY has the value 0x10000000\n\nThis is a flag used with llGetParcelFlags to check if group deeded objects are allowed to enter the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_GROUP_SCRIPTS",
        "type": "integer",
        "value": "0x2000000",
        "description": "The integer constant PARCEL_FLAG_ALLOW_GROUP_SCRIPTS has the value 0x2000000\n\nThis is a flag used with llGetParcelFlags to check if scripts in group deeded objects are allowed to run in the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_LANDMARK",
        "type": "integer",
        "value": "0x8",
        "description": "The integer constant PARCEL_FLAG_ALLOW_LANDMARK has the value 0x8\n\nThis is a flag used with llGetParcelFlags to check if creating landmarks is allowed on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_SCRIPTS",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant PARCEL_FLAG_ALLOW_SCRIPTS has the value 0x2\n\nThis is a flag used with llGetParcelFlags to check if scripts are allowed to run on the parcel."
    },
    {
        "name": "PARCEL_FLAG_ALLOW_TERRAFORM",
        "type": "integer",
        "value": "0x10",
        "description": "The integer constant PARCEL_FLAG_ALLOW_TERRAFORM has the value 0x10\n\nThis is a flag used with llGetParcelFlags to check if anyone is allowed to terraform the parcel."
    },
    {
        "name": "PARCEL_FLAG_LOCAL_SOUND_ONLY",
        "type": "integer",
        "value": "0x8000",
        "description": "The integer constant PARCEL_FLAG_LOCAL_SOUND_ONLY has the value 0x8000\n\nThis is a flag used with llGetParcelFlags to check if the parcel allows sound originating from outside of the parcel to be heard inside the parcel."
    },
    {
        "name": "PARCEL_FLAG_RESTRICT_PUSHOBJECT",
        "type": "integer",
        "value": "0x200000",
        "description": "The integer constant PARCEL_FLAG_RESTRICT_PUSHOBJECT has the value 0x200000\n\nThis is a flag used with llGetParcelFlags to check if llPushObject is allowed to be used by non-owners (or non-group officers if group owned land) inside the parcel."
    },
    {
        "name": "PARCEL_FLAG_USE_ACCESS_GROUP",
        "type": "integer",
        "value": "0x100",
        "description": "The integer constant PARCEL_FLAG_USE_ACCESS_GROUP has the value 0x100\n\nThis is a flag used with llGetParcelFlags to check if the parcel has access restricted to a group."
    },
    {
        "name": "PARCEL_FLAG_USE_ACCESS_LIST",
        "type": "integer",
        "value": "0x200",
        "description": "The integer constant PARCEL_FLAG_USE_ACCESS_LIST has the value 0x200\n\nThis is a flag used with llGetParcelFlags to check if the parcel has access restricted to a list of avatars."
    },
    {
        "name": "PARCEL_FLAG_USE_BAN_LIST",
        "type": "integer",
        "value": "0x400",
        "description": "The integer constant PARCEL_FLAG_USE_BAN_LIST has the value 0x400\n\nThis is a flag used with llGetParcelFlags to check if the parcel has access restricted with a ban list of avatars."
    },
    {
        "name": "PARCEL_FLAG_USE_LAND_PASS_LIST",
        "type": "integer",
        "value": "0x800",
        "description": "The integer constant PARCEL_FLAG_USE_LAND_PASS_LIST has the value 0x800\n\nThis is a flag used with llGetParcelFlags to check if the parcel has access restricted with a land-pass list of avatars.\nLand Passes are sold for L$."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_AGENT",
        "type": "integer",
        "value": "7",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_AGENT has the value 7\n\nApplies the media command to the specified agent only."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_AUTO_ALIGN",
        "type": "integer",
        "value": "9",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_AUTO_ALIGN has the value 9\n\nSets the parcel option 'Auto scale content'."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_AUTO_ALIGN",
        "type": "integer",
        "value": "9",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_AUTO_ALIGN has the value 9\n\nSets the parcel option 'Auto scale content'."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_DESC",
        "type": "integer",
        "value": "12",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_DESC has the value 12\n\nUse this to get or set the parcel media description."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_LOOP_SET",
        "type": "integer",
        "value": "13",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_LOOP_SET has the value 13\n\nUse this to get or set the parcel's media loop duration. It may not be functional. See VWR-19712 for detail."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_PAUSE",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_PAUSE has the value 1\n\nPause the media stream (stop playing but stay on current frame)."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_PLAY",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_PLAY has the value 2\n\nStart the media stream playing from the current frame and stop when the end is reached."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_SIZE",
        "type": "integer",
        "value": "11",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_SIZE has the value 11\n\nUse this to get or set the parcel media pixel resolution."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_STOP",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_STOP has the value 0\n\nStop the media stream and go back to the first frame."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_TEXTURE",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_TEXTURE has the value 4\n\nUse this to get or set the parcel's media texture."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_TIME",
        "type": "integer",
        "value": "6",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_TIME has the value 6\n\nMove a media stream to a specific time in (floating point) seconds."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_TYPE",
        "type": "integer",
        "value": "10",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_TYPE has the value 10\n\nUse this to get or set the parcel media MIME type (e.g. \"text/html\")."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_UNLOAD",
        "type": "integer",
        "value": "8",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_UNLOAD has the value 8\n\nCompletely unloads the movie and restores the original texture."
    },
    {
        "name": "PARCEL_MEDIA_COMMAND_URL",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PARCEL_MEDIA_COMMAND_URL has the value 5\n\nUsed to get or set the parcel's media url."
    },
    {
        "name": "PASSIVE",
        "type": "integer",
        "value": "0x4",
        "description": "The integer constant PASSIVE has the value 0x4\n\nIf it is contained in the result of llDetectedType(), it means it is non-physical objects.\nIf it is used as an filter of llSensor() or llSensorRepeat(), it will search for non-scripted or script is inactive and non-physical or, if physical, not moving. Thus, it is not using SL server resources now."
    },
    {
        "name": "PASS_ALWAYS",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PASS_ALWAYS has the value 1\n\nThe applicable event group will always be triggered in the the root prim. Whether or not is handled in the child prim is irrelevant."
    },
    {
        "name": "PASS_IF_NOT_HANDLED",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PASS_IF_NOT_HANDLED has the value 0\n\nThe applicable event group will be triggered in the the root prim if it is not handled in this child prim."
    },
    {
        "name": "PASS_NEVER",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PASS_NEVER has the value 2\n\nThe applicable event group will never be triggered in the the root prim. Whether or not is handled in the child prim is irrelevant."
    },
    {
        "name": "PATROL_PAUSE_AT_WAYPOINTS",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PATROL_PAUSE_AT_WAYPOINTS has the value 0\n\nOption parameter for llPatrolPoints function.  Can be set TRUE or FALSE (the default).\nWhen set TRUE, characters will slow down and momentarily pause at each waypoint.\nWhen set FALSE, characters will continue to move to the next waypoint at full speed, with no pause."
    },
    {
        "name": "PAYMENT_INFO_ON_FILE",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant PAYMENT_INFO_ON_FILE has the value 0x1\n\nIf payment info is on file."
    },
    {
        "name": "PAYMENT_INFO_USED",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant PAYMENT_INFO_USED has the value 0x2\n\nIf payment info has been used."
    },
    {
        "name": "PAY_DEFAULT",
        "type": "integer",
        "value": "-2",
        "description": "The integer constant PAY_DEFAULT has the value -2"
    },
    {
        "name": "PAY_HIDE",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant PAY_HIDE has the value -1"
    },
    {
        "name": "PERMISSION_ATTACH",
        "type": "integer",
        "value": "0x20",
        "description": "The integer constant PERMISSION_ATTACH has the value 0x20"
    },
    {
        "name": "PERMISSION_CHANGE_LINKS",
        "type": "integer",
        "value": "0x80",
        "description": "The integer constant PERMISSION_CHANGE_LINKS has the value 0x80"
    },
    {
        "name": "PERMISSION_CONTROL_CAMERA",
        "type": "integer",
        "value": "0x800",
        "description": "The integer constant PERMISSION_CONTROL_CAMERA has the value 0x800"
    },
    {
        "name": "PERMISSION_DEBIT",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant PERMISSION_DEBIT has the value 0x2"
    },
    {
        "name": "PERMISSION_OVERRIDE_ANIMATIONS",
        "type": "integer",
        "value": "0x8000",
        "description": "The integer constant PERMISSION_OVERRIDE_ANIMATIONS has the value 0x8000"
    },
    {
        "name": "PERMISSION_RETURN_OBJECTS",
        "type": "integer",
        "value": "65536",
        "description": "The integer constant PERMISSION_RETURN_OBJECTS has the value 65536\n\nRequired Permission to use the llReturnObject* functions."
    },
    {
        "name": "PERMISSION_SILENT_ESTATE_MANAGEMENT",
        "type": "integer",
        "value": "0x4000",
        "description": "The integer constant PERMISSION_SILENT_ESTATE_MANAGEMENT has the value 0x4000\n\nA script with this permission does not notify the object owner when it modifies estate access rules via llManageEstateAccess."
    },
    {
        "name": "PERMISSION_TAKE_CONTROLS",
        "type": "integer",
        "value": "0x4",
        "description": "The integer constant PERMISSION_TAKE_CONTROLS has the value 0x4"
    },
    {
        "name": "PERMISSION_TELEPORT",
        "type": "integer",
        "value": "0x1000",
        "description": "The integer constant PERMISSION_TELEPORT has the value 0x1000\n\nPermission required to use llTeleportAgent."
    },
    {
        "name": "PERMISSION_TRACK_CAMERA",
        "type": "integer",
        "value": "0x400",
        "description": "The integer constant PERMISSION_TRACK_CAMERA has the value 0x400"
    },
    {
        "name": "PERMISSION_TRIGGER_ANIMATION",
        "type": "integer",
        "value": "0x10",
        "description": "The integer constant PERMISSION_TRIGGER_ANIMATION has the value 0x10"
    },
    {
        "name": "PERM_ALL",
        "type": "integer",
        "value": "0x7FFFFFFF",
        "description": "The integer constant PERM_ALL has the value 0x7FFFFFFF"
    },
    {
        "name": "PERM_COPY",
        "type": "integer",
        "value": "0x00008000",
        "description": "The integer constant PERM_COPY has the value 0x00008000"
    },
    {
        "name": "PERM_MODIFY",
        "type": "integer",
        "value": "0x00004000",
        "description": "The integer constant PERM_MODIFY has the value 0x00004000"
    },
    {
        "name": "PERM_MOVE",
        "type": "integer",
        "value": "0x00080000",
        "description": "The integer constant PERM_MOVE has the value 0x00080000"
    },
    {
        "name": "PERM_TRANSFER",
        "type": "integer",
        "value": "0x00002000",
        "description": "The integer constant PERM_TRANSFER has the value 0x00002000"
    },
    {
        "name": "PI",
        "type": "float",
        "value": "3.1415926535897932384626433832795f",
        "description": "The float constant PI has the value 3.1415926535897932384626433832795f"
    },
    {
        "name": "PING_PONG",
        "type": "integer",
        "value": "0x08",
        "description": "The integer constant PING_PONG has the value 0x08"
    },
    {
        "name": "PI_BY_TWO",
        "type": "float",
        "value": "1.5707963267948966192313216916398f",
        "description": "The float constant PI_BY_TWO has the value 1.5707963267948966192313216916398f"
    },
    {
        "name": "PRIM_ALLOW_UNSIT",
        "type": "integer",
        "value": "39",
        "description": "The integer constant PRIM_ALLOW_UNSIT has the value 39\n\nWhen set on a prim that is running a script as part of an experience an avatar that is seated on the sit target and has agreed to participate in the experience will be unable to stand or select another prim to sit on.  The restriction remains in place until one of the following conditions is met:"
    },
    {
        "name": "PRIM_ALPHA_MODE",
        "type": "integer",
        "value": "38",
        "description": "The integer constant PRIM_ALPHA_MODE has the value 38\n\nUsed to specify how the alpha channel of the diffuse texture should affect rendering of a prim’s face."
    },
    {
        "name": "PRIM_ALPHA_MODE_BLEND",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_ALPHA_MODE_BLEND has the value 1\n\nUsed with PRIM_ALPHA_MODE. Prims faces set to this type use alpha blending for diffuse texture rendering (assuming the alpha channel exists)."
    },
    {
        "name": "PRIM_ALPHA_MODE_EMISSIVE",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_ALPHA_MODE_EMISSIVE has the value 3\n\nUsed with PRIM_ALPHA_MODE. Prims faces set to this type render with an emissivity corresponding to the opacity of each pixel of the diffuse texture.  The more opaque a pixel is, the brighter it renders under all lighting conditions.  A fully-opaque pixel will effectively render as 'full bright'."
    },
    {
        "name": "PRIM_ALPHA_MODE_MASK",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_ALPHA_MODE_MASK has the value 2\n\nUsed with PRIM_ALPHA_MODE. Prims faces set to this type render as either completely opaque or completely transparent on a per-pixel basis.  Pixels which are less opaque than the specified mask_cutoff are rendered as completely transparent, and the rest are rendered as fully opaque."
    },
    {
        "name": "PRIM_ALPHA_MODE_NONE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PRIM_ALPHA_MODE_NONE has the value 0\n\nUsed with PRIM_ALPHA_MODE. Prims faces set to this type ignore the alpha channel of the diffuse texture, and render as completely opaque."
    },
    {
        "name": "PRIM_BUMP_BARK",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PRIM_BUMP_BARK has the value 4"
    },
    {
        "name": "PRIM_BUMP_BLOBS",
        "type": "integer",
        "value": "12",
        "description": "The integer constant PRIM_BUMP_BLOBS has the value 12"
    },
    {
        "name": "PRIM_BUMP_BRICKS",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PRIM_BUMP_BRICKS has the value 5"
    },
    {
        "name": "PRIM_BUMP_BRIGHT",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_BUMP_BRIGHT has the value 1"
    },
    {
        "name": "PRIM_BUMP_CHECKER",
        "type": "integer",
        "value": "6",
        "description": "The integer constant PRIM_BUMP_CHECKER has the value 6"
    },
    {
        "name": "PRIM_BUMP_CONCRETE",
        "type": "integer",
        "value": "7",
        "description": "The integer constant PRIM_BUMP_CONCRETE has the value 7"
    },
    {
        "name": "PRIM_BUMP_DARK",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_BUMP_DARK has the value 2"
    },
    {
        "name": "PRIM_BUMP_DISKS",
        "type": "integer",
        "value": "10",
        "description": "The integer constant PRIM_BUMP_DISKS has the value 10"
    },
    {
        "name": "PRIM_BUMP_GRAVEL",
        "type": "integer",
        "value": "11",
        "description": "The integer constant PRIM_BUMP_GRAVEL has the value 11"
    },
    {
        "name": "PRIM_BUMP_LARGETILE",
        "type": "integer",
        "value": "14",
        "description": "The integer constant PRIM_BUMP_LARGETILE has the value 14"
    },
    {
        "name": "PRIM_BUMP_NONE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PRIM_BUMP_NONE has the value 0"
    },
    {
        "name": "PRIM_BUMP_SHINY",
        "type": "integer",
        "value": "19",
        "description": "The integer constant PRIM_BUMP_SHINY has the value 19\n\nUsed to get or set the Bump Mapping and shiny settings of the prim's face."
    },
    {
        "name": "PRIM_BUMP_SIDING",
        "type": "integer",
        "value": "13",
        "description": "The integer constant PRIM_BUMP_SIDING has the value 13"
    },
    {
        "name": "PRIM_BUMP_STONE",
        "type": "integer",
        "value": "9",
        "description": "The integer constant PRIM_BUMP_STONE has the value 9"
    },
    {
        "name": "PRIM_BUMP_STUCCO",
        "type": "integer",
        "value": "15",
        "description": "The integer constant PRIM_BUMP_STUCCO has the value 15"
    },
    {
        "name": "PRIM_BUMP_SUCTION",
        "type": "integer",
        "value": "16",
        "description": "The integer constant PRIM_BUMP_SUCTION has the value 16"
    },
    {
        "name": "PRIM_BUMP_TILE",
        "type": "integer",
        "value": "8",
        "description": "The integer constant PRIM_BUMP_TILE has the value 8"
    },
    {
        "name": "PRIM_BUMP_WEAVE",
        "type": "integer",
        "value": "17",
        "description": "The integer constant PRIM_BUMP_WEAVE has the value 17"
    },
    {
        "name": "PRIM_BUMP_WOOD",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_BUMP_WOOD has the value 3"
    },
    {
        "name": "PRIM_COLOR",
        "type": "integer",
        "value": "18",
        "description": "The integer constant PRIM_COLOR has the value 18\n\nUsed to get or set the color and alpha of a prim's face."
    },
    {
        "name": "PRIM_DESC",
        "type": "integer",
        "value": "28",
        "description": "The integer constant PRIM_DESC has the value 28\n\nUsed to get or set the prim's description."
    },
    {
        "name": "PRIM_FLEXIBLE",
        "type": "integer",
        "value": "21",
        "description": "The integer constant PRIM_FLEXIBLE has the value 21\n\nUsed to get or set the prim's flexible configuration."
    },
    {
        "name": "PRIM_FULLBRIGHT",
        "type": "integer",
        "value": "20",
        "description": "The integer constant PRIM_FULLBRIGHT has the value 20\n\nUsed to get or set the full-bright setting of a prim's face."
    },
    {
        "name": "PRIM_GLOW",
        "type": "integer",
        "value": "25",
        "description": "The integer constant PRIM_GLOW has the value 25\n\nPRIM_GLOW is used to get or set the glow status of the face. Use the integer number 25 if the compiler rejects the named constant."
    },
    {
        "name": "PRIM_HOLE_CIRCLE",
        "type": "integer",
        "value": "0x10",
        "description": "The integer constant PRIM_HOLE_CIRCLE has the value 0x10\n\nUsed with certain PRIM_TYPE_* flags to make a circular hole, via the hole_shape parameter."
    },
    {
        "name": "PRIM_HOLE_DEFAULT",
        "type": "integer",
        "value": "0x00",
        "description": "The integer constant PRIM_HOLE_DEFAULT has the value 0x00\n\nUsed with certain PRIM_TYPE_* flags to make a hole the same shape as the outer shape, via the hole_shape parameter."
    },
    {
        "name": "PRIM_HOLE_SQUARE",
        "type": "integer",
        "value": "0x20",
        "description": "The integer constant PRIM_HOLE_SQUARE has the value 0x20\n\nUsed with certain PRIM_TYPE_* flags to make a squarish hole, via the hole_shape parameter."
    },
    {
        "name": "PRIM_HOLE_TRIANGLE",
        "type": "integer",
        "value": "0x30",
        "description": "The integer constant PRIM_HOLE_TRIANGLE has the value 0x30\n\nUsed with certain PRIM_TYPE_* flags to make a triangular hole, via the hole_shape parameter."
    },
    {
        "name": "PRIM_HOLE_TRIANGLE",
        "type": "integer",
        "value": "0x30",
        "description": "The integer constant PRIM_HOLE_TRIANGLE has the value 0x30\n\nUsed with certain PRIM_TYPE_* flags to make a triangular hole, via the hole_shape parameter."
    },
    {
        "name": "PRIM_MATERIAL",
        "type": "integer",
        "value": "2",
        "description": "<videoflash>6OXYO61kQCA</videoflash>"
    },
    {
        "name": "PRIM_MATERIAL_FLESH",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PRIM_MATERIAL_FLESH has the value 4"
    },
    {
        "name": "PRIM_MATERIAL_GLASS",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_MATERIAL_GLASS has the value 2\n\nVery low friction"
    },
    {
        "name": "PRIM_MATERIAL_LIGHT",
        "type": "integer",
        "value": "7",
        "description": "The integer constant PRIM_MATERIAL_LIGHT has the value 7\n\nThis constant and it's underlying functionality is deprecated.\n Light is no longer a prim property, it is now a face property. The same functionality is reproduced with [ PRIM_FULLBRIGHT, ALL_SIDES, TRUE ]"
    },
    {
        "name": "PRIM_MATERIAL_METAL",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_MATERIAL_METAL has the value 1"
    },
    {
        "name": "PRIM_MATERIAL_PLASTIC",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PRIM_MATERIAL_PLASTIC has the value 5"
    },
    {
        "name": "PRIM_MATERIAL_RUBBER",
        "type": "integer",
        "value": "6",
        "description": "The integer constant PRIM_MATERIAL_RUBBER has the value 6"
    },
    {
        "name": "PRIM_MATERIAL_STONE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PRIM_MATERIAL_STONE has the value 0"
    },
    {
        "name": "PRIM_MATERIAL_WOOD",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_MATERIAL_WOOD has the value 3"
    },
    {
        "name": "PRIM_MATERIAL_WOOD",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_MATERIAL_WOOD has the value 3"
    },
    {
        "name": "PRIM_MEDIA_AUTO_LOOP",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PRIM_MEDIA_AUTO_LOOP has the value 4"
    },
    {
        "name": "PRIM_MEDIA_AUTO_PLAY",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PRIM_MEDIA_AUTO_PLAY has the value 5"
    },
    {
        "name": "PRIM_MEDIA_AUTO_SCALE",
        "type": "integer",
        "value": "6",
        "description": "The integer constant PRIM_MEDIA_AUTO_SCALE has the value 6"
    },
    {
        "name": "PRIM_MEDIA_AUTO_ZOOM",
        "type": "integer",
        "value": "7",
        "description": "The integer constant PRIM_MEDIA_AUTO_ZOOM has the value 7"
    },
    {
        "name": "PRIM_MEDIA_CURRENT_URL",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_MEDIA_CURRENT_URL has the value 2"
    },
    {
        "name": "PRIM_MEDIA_FIRST_CLICK_INTERACT",
        "type": "integer",
        "value": "8",
        "description": "The integer constant PRIM_MEDIA_FIRST_CLICK_INTERACT has the value 8"
    },
    {
        "name": "PRIM_MEDIA_HEIGHT_PIXELS",
        "type": "integer",
        "value": "10",
        "description": "The integer constant PRIM_MEDIA_HEIGHT_PIXELS has the value 10"
    },
    {
        "name": "PRIM_MEDIA_HOME_URL",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_MEDIA_HOME_URL has the value 3"
    },
    {
        "name": "PRIM_MEDIA_PERMS_CONTROL",
        "type": "integer",
        "value": "14",
        "description": "The integer constant PRIM_MEDIA_PERMS_CONTROL has the value 14"
    },
    {
        "name": "PRIM_MEDIA_PERMS_INTERACT",
        "type": "integer",
        "value": "13",
        "description": "The integer constant PRIM_MEDIA_PERMS_INTERACT has the value 13"
    },
    {
        "name": "PRIM_MEDIA_PERM_ANYONE",
        "type": "integer",
        "value": "0x4",
        "description": "The integer constant PRIM_MEDIA_PERM_ANYONE has the value 0x4"
    },
    {
        "name": "PRIM_MEDIA_PERM_GROUP",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant PRIM_MEDIA_PERM_GROUP has the value 0x2"
    },
    {
        "name": "PRIM_MEDIA_PERM_NONE",
        "type": "integer",
        "value": "0x0",
        "description": "The integer constant PRIM_MEDIA_PERM_NONE has the value 0x0"
    },
    {
        "name": "PRIM_MEDIA_PERM_OWNER",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant PRIM_MEDIA_PERM_OWNER has the value 0x1"
    },
    {
        "name": "PRIM_MEDIA_WHITELIST",
        "type": "integer",
        "value": "12",
        "description": "The integer constant PRIM_MEDIA_WHITELIST has the value 12"
    },
    {
        "name": "PRIM_MEDIA_WHITELIST_ENABLE",
        "type": "integer",
        "value": "11",
        "description": "The integer constant PRIM_MEDIA_WHITELIST_ENABLE has the value 11"
    },
    {
        "name": "PRIM_MEDIA_WIDTH_PIXELS",
        "type": "integer",
        "value": "9",
        "description": "The integer constant PRIM_MEDIA_WIDTH_PIXELS has the value 9"
    },
    {
        "name": "PRIM_NAME",
        "type": "integer",
        "value": "27",
        "description": "The integer constant PRIM_NAME has the value 27\n\nUsed to get or set the prim's name."
    },
    {
        "name": "PRIM_NORMAL",
        "type": "integer",
        "value": "37",
        "description": "The integer constant PRIM_NORMAL has the value 37\n\nUsed to get or set the normal map texture settings of a prim's face."
    },
    {
        "name": "PRIM_OMEGA",
        "type": "integer",
        "value": "32",
        "description": "The integer constant PRIM_OMEGA has the value 32\n\nUsed to make the object spin at the specified axis and rate, or retrieve spin settings. See llTargetOmega for specification."
    },
    {
        "name": "PRIM_PHANTOM",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PRIM_PHANTOM has the value 5\n\nUsed to get or set the object's phantom status."
    },
    {
        "name": "PRIM_PHYSICS",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_PHYSICS has the value 3\n\nUsed to get or set the object's physics status. When enabled the object responds to SL physics."
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_CONVEX",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_PHYSICS_SHAPE_CONVEX has the value 2\n\nUsed with PRIM_PHYSICS_SHAPE_TYPE. Prims of this type use the convex hull of the prim shape for physics (this is the default for mesh objects)"
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_NONE",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_PHYSICS_SHAPE_NONE has the value 1\n\nUsed with PRIM_PHYSICS_SHAPE_TYPE. Prims of this type are ignored by the physics engine. Read more details on PRIM_PHYSICS_SHAPE_TYPE"
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_PRIM",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PRIM_PHYSICS_SHAPE_PRIM has the value 0\n\nUsed with PRIM_PHYSICS_SHAPE_TYPE. Prims of this type use the normal prim shape for physics (this is the default for all non-mesh objects)"
    },
    {
        "name": "PRIM_PHYSICS_SHAPE_TYPE",
        "type": "integer",
        "value": "30",
        "description": "The integer constant PRIM_PHYSICS_SHAPE_TYPE has the value 30\n\nUsed to set the type of shape the physics engine should use for the prim. This is primarily used to do Physics Optimization."
    },
    {
        "name": "PRIM_POINT_LIGHT",
        "type": "integer",
        "value": "23",
        "description": "The integer constant PRIM_POINT_LIGHT has the value 23\n\nPRIM_POINT_LIGHT is used to configure the point light configuration of the prim"
    },
    {
        "name": "PRIM_POSITION",
        "type": "integer",
        "value": "6",
        "description": "The integer constant PRIM_POSITION has the value 6\n\nPRIM_POSITION is used to get or set the prim's position."
    },
    {
        "name": "PRIM_POS_LOCAL",
        "type": "integer",
        "value": "33",
        "description": "The integer constant PRIM_POS_LOCAL has the value 33\n\nPRIM_POS_LOCAL is used to get or set the prim's local position."
    },
    {
        "name": "PRIM_PROJECTOR",
        "type": "integer",
        "value": "42",
        "description": "The integer constant PRIM_PROJECTOR has the value 42\n\nThe light projection settings for this prim. If the prim is not a projector the texture key will be NULL_KEY."
    },
    {
        "name": "PRIM_REFLECTION_PROBE",
        "type": "integer",
        "value": "44",
        "description": "The integer constant PRIM_REFLECTION_PROBE has the value 44\n\nPRIM_REFLECTION_PROBE is used to change the reflection probe configuration of the prim."
    },
    {
        "name": "PRIM_REFLECTION_PROBE_BOX",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_REFLECTION_PROBE_BOX has the value 1\n\nUsed with PRIM_REFLECTION_PROBE. A reflection probe is a sphere by default, otherwise a box if this flag is set on the corresponding prim."
    },
    {
        "name": "PRIM_REFLECTION_PROBE_DYNAMIC",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_REFLECTION_PROBE_DYNAMIC has the value 2\n\nUsed with PRIM_REFLECTION_PROBE. A reflection probe does not image avatars by default, otherwise it images avatars if this flag is set on the corresponding prim. Imaging avatars in reflection probes has a performance cost."
    },
    {
        "name": "PRIM_RENDER_MATERIAL",
        "type": "integer",
        "value": "43",
        "description": "The integer constant PRIM_RENDER_MATERIAL has the value 43\n\nUsed to get or set the material settings of a prim's face."
    },
    {
        "name": "PRIM_ROTATION",
        "type": "integer",
        "value": "8",
        "description": "The integer constant PRIM_ROTATION has the value 8\n\nPRIM_ROTATION is used to get or set the prim's rotation."
    },
    {
        "name": "PRIM_ROT_LOCAL",
        "type": "integer",
        "value": "29",
        "description": "The integer constant PRIM_ROT_LOCAL has the value 29\n\nPRIM_ROT_LOCAL is used to get or set the prim's local rotation."
    },
    {
        "name": "PRIM_SCRIPTED_SIT_ONLY",
        "type": "integer",
        "value": "40",
        "description": "The integer constant PRIM_SCRIPTED_SIT_ONLY has the value 40\n\nAgents may only be seated on this prim using llSitOnLink.  Attempts to do a manual sit will fail.  This flag applies even outside of an experience enabled region."
    },
    {
        "name": "PRIM_SCULPT_FLAG_INVERT",
        "type": "integer",
        "value": "0x40",
        "description": "The integer constant PRIM_SCULPT_FLAG_INVERT has the value 0x40\n\nPRIM_SCULPT_FLAG_INVERT will cause the sculpted prim to render inside out. It works by inverting the Normal of each polygon that makes up the sculpted prim.\nSculpted Prims: FAQ"
    },
    {
        "name": "PRIM_SCULPT_FLAG_MIRROR",
        "type": "integer",
        "value": "0x80",
        "description": "The integer constant PRIM_SCULPT_FLAG_MIRROR has the value 0x80\n\nPRIM_SCULPT_FLAG_MIRROR will cause a mirror of the sculpted prim to rendered. The sculpted prim is mirrored over the X axis.\nSculpted Prims: FAQ"
    },
    {
        "name": "PRIM_SCULPT_TYPE_CYLINDER",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PRIM_SCULPT_TYPE_CYLINDER has the value 4\n\nWhen used in conjunction with PRIM_TYPE_SCULPT a cylinder type sculpty is produced. It does this by stitching the left side to right."
    },
    {
        "name": "PRIM_SCULPT_TYPE_MASK",
        "type": "integer",
        "value": "7",
        "description": "The integer constant PRIM_SCULPT_TYPE_MASK has the value 7\n\nPRIM_SCULPT_TYPE_MASK can be used when parsing the output of llGetPrimitiveParams when dealing with sculpted prims (PRIM_TYPE_SCULPT) to separate the sculpted type from the flags (PRIM_SCULPT_FLAG_INVERT and PRIM_SCULPT_FLAG_MIRROR) that can modify it.\nSculpted Prims: FAQ"
    },
    {
        "name": "PRIM_SCULPT_TYPE_PLANE",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_SCULPT_TYPE_PLANE has the value 3\n\nWhen used in conjunction with PRIM_TYPE_SCULPT a plane type sculpty is produced. No stitching or converging is performed."
    },
    {
        "name": "PRIM_SCULPT_TYPE_SPHERE",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_SCULPT_TYPE_SPHERE has the value 1\n\nWhen used in conjunction with PRIM_TYPE_SCULPT a sphere type sculpty is produced. It does this by stitching the left side to right then separately converging the top & bottom."
    },
    {
        "name": "PRIM_SCULPT_TYPE_TORUS",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_SCULPT_TYPE_TORUS has the value 2\n\nWhen used in conjunction with PRIM_TYPE_SCULPT a torus type sculpty is produced. It does this by stitching the top to bottom and the left side to right."
    },
    {
        "name": "PRIM_SHINY_HIGH",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_SHINY_HIGH has the value 3"
    },
    {
        "name": "PRIM_SHINY_LOW",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_SHINY_LOW has the value 1"
    },
    {
        "name": "PRIM_SHINY_MEDIUM",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_SHINY_MEDIUM has the value 2"
    },
    {
        "name": "PRIM_SHINY_NONE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PRIM_SHINY_NONE has the value 0"
    },
    {
        "name": "PRIM_SIT_TARGET",
        "type": "integer",
        "value": "41",
        "description": "The integer constant PRIM_SIT_TARGET has the value 41\n\nThe sit target, if any defined for this prim.  If the active value is 0 the sit target is deactivated. If it is nonzero the prim's sit target is set to the indicated offset and rotation. As with llLinkSitTarget(), these values are relative to the prim. However, unlike llLinkSitTarget() an offset of <0.0, 0.0, 0.0> may be explicitly set."
    },
    {
        "name": "PRIM_SIZE",
        "type": "integer",
        "value": "7",
        "description": "The integer constant PRIM_SIZE has the value 7\n\nReturns or sets the prim's size."
    },
    {
        "name": "PRIM_SLICE",
        "type": "integer",
        "value": "35",
        "description": "The integer constant PRIM_SLICE has the value 35\n\nUsed to get or set the prim's slice values (a shape attribute, equivalent to advanced_cut)."
    },
    {
        "name": "PRIM_SPECULAR",
        "type": "integer",
        "value": "36",
        "description": "The integer constant PRIM_SPECULAR has the value 36\n\nUsed to get or set the specular map texture settings of a prim's face."
    },
    {
        "name": "PRIM_TEMP_ON_REZ",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PRIM_TEMP_ON_REZ has the value 4\n\nUsed to get or set the object's temporary status. It lives until the next garbage collection cycle (about 1 minute). Does not count against normal prim limits. There are limits to the number of temporary objects that can exist in a region and the garbage collector may run sooner than expected."
    },
    {
        "name": "PRIM_TEXGEN",
        "type": "integer",
        "value": "22",
        "description": "The integer constant PRIM_TEXGEN has the value 22\n\nPRIM_TEXGEN is used to get and set the configure the texture mapping mode of the face."
    },
    {
        "name": "PRIM_TEXGEN",
        "type": "integer",
        "value": "22",
        "description": "The integer constant PRIM_TEXGEN has the value 22\n\nPRIM_TEXGEN is used to get and set the configure the texture mapping mode of the face."
    },
    {
        "name": "PRIM_TEXGEN",
        "type": "integer",
        "value": "22",
        "description": "The integer constant PRIM_TEXGEN has the value 22\n\nPRIM_TEXGEN is used to get and set the configure the texture mapping mode of the face."
    },
    {
        "name": "PRIM_TEXGEN",
        "type": "integer",
        "value": "22",
        "description": "The integer constant PRIM_TEXGEN has the value 22\n\nPRIM_TEXGEN is used to get and set the configure the texture mapping mode of the face."
    },
    {
        "name": "PRIM_TEXTURE",
        "type": "integer",
        "value": "17",
        "description": "The integer constant PRIM_TEXTURE has the value 17\n\nUsed to get or set the texture settings of a prim's face."
    },
    {
        "name": "PRIM_TYPE",
        "type": "integer",
        "value": "9",
        "description": "The integer constant PRIM_TYPE has the value 9\n\nGets or sets the type of the prim and associated type parameters."
    },
    {
        "name": "PRIM_TYPE_BOX",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PRIM_TYPE_BOX has the value 0\n\nPRIM_TYPE_BOX is a parameter of PRIM_TYPE used to make prim into a box and to change specific properties that define the shape of that box."
    },
    {
        "name": "PRIM_TYPE_CYLINDER",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PRIM_TYPE_CYLINDER has the value 1\n\nPRIM_TYPE_CYLINDER is a parameter of PRIM_TYPE used to make prim into a cylinder and to change specific properties that define the shape of that cylinder."
    },
    {
        "name": "PRIM_TYPE_PRISM",
        "type": "integer",
        "value": "2",
        "description": "The integer constant PRIM_TYPE_PRISM has the value 2\n\nPRIM_TYPE_PRISM is a parameter of PRIM_TYPE used to make prim into a prism and to change specific properties that define the shape of that prism."
    },
    {
        "name": "PRIM_TYPE_RING",
        "type": "integer",
        "value": "6",
        "description": "The integer constant PRIM_TYPE_RING has the value 6\n\nPRIM_TYPE_RING is a parameter of PRIM_TYPE used to make prim into a ring and to change specific properties that define the shape of that ring."
    },
    {
        "name": "PRIM_TYPE_SCULPT",
        "type": "integer",
        "value": "7",
        "description": "The integer constant PRIM_TYPE_SCULPT has the value 7\n\nPRIM_TYPE_SCULPT is a parameter of PRIM_TYPE used to make a prim into a sculpty of specific shape and type.\nSculpted Prims: FAQ"
    },
    {
        "name": "PRIM_TYPE_SPHERE",
        "type": "integer",
        "value": "3",
        "description": "The integer constant PRIM_TYPE_SPHERE has the value 3\n\nPRIM_TYPE_SPHERE is a parameter of PRIM_TYPE used to make prim into a sphere and to change specific properties that define the shape of that sphere."
    },
    {
        "name": "PRIM_TYPE_TORUS",
        "type": "integer",
        "value": "4",
        "description": "The integer constant PRIM_TYPE_TORUS has the value 4\n\nPRIM_TYPE_TORUS is a parameter of PRIM_TYPE used to make prim into a torus and to change specific properties that define the shape of that torus."
    },
    {
        "name": "PRIM_TYPE_TUBE",
        "type": "integer",
        "value": "5",
        "description": "The integer constant PRIM_TYPE_TUBE has the value 5\n\nPRIM_TYPE_TUBE is a parameter of PRIM_TYPE used to make prim into a tube and to change specific properties that define the shape of that tube."
    },
    {
        "name": "PROFILE_NONE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant PROFILE_NONE has the value 0"
    },
    {
        "name": "PROFILE_SCRIPT_MEMORY",
        "type": "integer",
        "value": "1",
        "description": "The integer constant PROFILE_SCRIPT_MEMORY has the value 1"
    },
    {
        "name": "PUBLIC_CHANNEL",
        "type": "integer",
        "value": "0x0",
        "description": "The integer constant PUBLIC_CHANNEL has the value 0x0\n\nChat channel that broadcasts to all nearby users & objects. This channel is sometimes referred to as: open chat, local chat and public chat."
    },
    {
        "name": "RAD_TO_DEG",
        "type": "float",
        "value": "57.295779513082320876798154814105f",
        "description": "The float constant RAD_TO_DEG has the value 57.295779513082320876798154814105f"
    },
    {
        "name": "RCERR_CAST_TIME_EXCEEDED",
        "type": "integer",
        "value": "-3",
        "description": "The integer constant RCERR_CAST_TIME_EXCEEDED has the value -3"
    },
    {
        "name": "RCERR_SIM_PERF_LOW",
        "type": "integer",
        "value": "-2",
        "description": "The integer constant RCERR_SIM_PERF_LOW has the value -2"
    },
    {
        "name": "RCERR_UNKNOWN",
        "type": "integer",
        "value": "-1",
        "description": "The integer constant RCERR_UNKNOWN has the value -1"
    },
    {
        "name": "RC_DATA_FLAGS",
        "type": "integer",
        "value": "2",
        "description": "The integer constant RC_DATA_FLAGS has the value 2"
    },
    {
        "name": "RC_DETECT_PHANTOM",
        "type": "integer",
        "value": "1",
        "description": "The integer constant RC_DETECT_PHANTOM has the value 1"
    },
    {
        "name": "RC_GET_LINK_NUM",
        "type": "integer",
        "value": "4",
        "description": "The integer constant RC_GET_LINK_NUM has the value 4"
    },
    {
        "name": "RC_GET_NORMAL",
        "type": "integer",
        "value": "1",
        "description": "The integer constant RC_GET_NORMAL has the value 1"
    },
    {
        "name": "RC_GET_ROOT_KEY",
        "type": "integer",
        "value": "2",
        "description": "The integer constant RC_GET_ROOT_KEY has the value 2"
    },
    {
        "name": "RC_MAX_HITS",
        "type": "integer",
        "value": "3",
        "description": "The integer constant RC_MAX_HITS has the value 3"
    },
    {
        "name": "RC_REJECT_AGENTS",
        "type": "integer",
        "value": "1",
        "description": "The integer constant RC_REJECT_AGENTS has the value 1"
    },
    {
        "name": "RC_REJECT_LAND",
        "type": "integer",
        "value": "8",
        "description": "The integer constant RC_REJECT_LAND has the value 8"
    },
    {
        "name": "RC_REJECT_NONPHYSICAL",
        "type": "integer",
        "value": "4",
        "description": "The integer constant RC_REJECT_NONPHYSICAL has the value 4"
    },
    {
        "name": "RC_REJECT_PHYSICAL",
        "type": "integer",
        "value": "2",
        "description": "The integer constant RC_REJECT_PHYSICAL has the value 2"
    },
    {
        "name": "RC_REJECT_TYPES",
        "type": "integer",
        "value": "0",
        "description": "The integer constant RC_REJECT_TYPES has the value 0"
    },
    {
        "name": "REGION_FLAG_ALLOW_DAMAGE",
        "type": "integer",
        "value": "0x00000001",
        "description": "The integer constant REGION_FLAG_ALLOW_DAMAGE has the value 0x00000001\n\nThis is a flag used with llGetRegionFlags to check if the region is entirely damage enabled."
    },
    {
        "name": "REGION_FLAG_ALLOW_DIRECT_TELEPORT",
        "type": "integer",
        "value": "0x00100000",
        "description": "The integer constant REGION_FLAG_ALLOW_DIRECT_TELEPORT has the value 0x00100000\n\nThis is a flag used with llGetRegionFlags to check if direct teleportation is allowed in the region."
    },
    {
        "name": "REGION_FLAG_BLOCK_FLY",
        "type": "integer",
        "value": "0x00080000",
        "description": "The integer constant REGION_FLAG_BLOCK_FLY has the value 0x00080000\n\nThis is a flag used with llGetRegionFlags to check if flying is disabled in the region."
    },
    {
        "name": "REGION_FLAG_BLOCK_TERRAFORM",
        "type": "integer",
        "value": "0x00000040",
        "description": "The integer constant REGION_FLAG_BLOCK_TERRAFORM has the value 0x00000040\n\nThis is a flag used with llGetRegionFlags to check if terraforming is disabled in the region."
    },
    {
        "name": "REGION_FLAG_DISABLE_COLLISIONS",
        "type": "integer",
        "value": "0x00001000",
        "description": "The integer constant REGION_FLAG_DISABLE_COLLISIONS has the value 0x00001000\n\nThis is a flag used with llGetRegionFlags to check if collisions have been disabled in the region."
    },
    {
        "name": "REGION_FLAG_DISABLE_PHYSICS",
        "type": "integer",
        "value": "0x00004000",
        "description": "The integer constant REGION_FLAG_DISABLE_PHYSICS has the value 0x00004000\n\nThis is a flag used with llGetRegionFlags to check if physics has been disabled in the region."
    },
    {
        "name": "REGION_FLAG_FIXED_SUN",
        "type": "integer",
        "value": "0x00000010",
        "description": "The integer constant REGION_FLAG_FIXED_SUN has the value 0x00000010\n\nThis is a flag used with llGetRegionFlags to check if the sun's position has been fixed in the region."
    },
    {
        "name": "REGION_FLAG_RESTRICT_PUSHOBJECT",
        "type": "integer",
        "value": "0x00400000",
        "description": "The integer constant REGION_FLAG_RESTRICT_PUSHOBJECT has the value 0x00400000\n\nThis is a flag used with llGetRegionFlags to check if llPushObject is restricted in the region."
    },
    {
        "name": "REGION_FLAG_SANDBOX",
        "type": "integer",
        "value": "0x00000100",
        "description": "The integer constant REGION_FLAG_SANDBOX has the value 0x00000100\n\nThis is a flag used with llGetRegionFlags to check if the region is a sandbox."
    },
    {
        "name": "REMOTE_DATA_CHANNEL",
        "type": "integer",
        "value": "1",
        "description": "The integer constant REMOTE_DATA_CHANNEL has the value 1"
    },
    {
        "name": "REMOTE_DATA_REPLY",
        "type": "integer",
        "value": "3",
        "description": "The integer constant REMOTE_DATA_REPLY has the value 3"
    },
    {
        "name": "REMOTE_DATA_REQUEST",
        "type": "integer",
        "value": "2",
        "description": "The integer constant REMOTE_DATA_REQUEST has the value 2"
    },
    {
        "name": "REVERSE",
        "type": "integer",
        "value": "0x04",
        "description": "The integer constant REVERSE has the value 0x04"
    },
    {
        "name": "ROTATE",
        "type": "integer",
        "value": "0x20",
        "description": "The integer constant ROTATE has the value 0x20\n\nA flag used with llSetTextureAnim to indicate the rotation style of texture animation."
    },
    {
        "name": "SCALE",
        "type": "integer",
        "value": "0x40",
        "description": "The integer constant SCALE has the value 0x40"
    },
    {
        "name": "SCRIPTED",
        "type": "integer",
        "value": "0x8",
        "description": "The integer constant SCRIPTED has the value 0x8\n\nIf it is contained in the result of llDetectedType(), it means what was detected has at least one active script.\nIf it is used as a filter of llSensor() or llSensorRepeat(), it will search for objects that has any script, which is doing anything in simulator just now."
    },
    {
        "name": "SIM_STAT_ACTIVE_SCRIPT_COUNT",
        "type": "integer",
        "value": "12",
        "description": "The integer constant SIM_STAT_ACTIVE_SCRIPT_COUNT has the value 12"
    },
    {
        "name": "SIM_STAT_AGENT_COUNT",
        "type": "integer",
        "value": "10",
        "description": "The integer constant SIM_STAT_AGENT_COUNT has the value 10"
    },
    {
        "name": "SIM_STAT_AGENT_MS",
        "type": "integer",
        "value": "7",
        "description": "The integer constant SIM_STAT_AGENT_MS has the value 7"
    },
    {
        "name": "SIM_STAT_AGENT_UPDATES",
        "type": "integer",
        "value": "2",
        "description": "The integer constant SIM_STAT_AGENT_UPDATES has the value 2"
    },
    {
        "name": "SIM_STAT_AI_MS",
        "type": "integer",
        "value": "26",
        "description": "The integer constant SIM_STAT_AI_MS has the value 26"
    },
    {
        "name": "SIM_STAT_ASSET_DOWNLOADS",
        "type": "integer",
        "value": "15",
        "description": "The integer constant SIM_STAT_ASSET_DOWNLOADS has the value 15"
    },
    {
        "name": "SIM_STAT_ASSET_DOWNLOADS",
        "type": "integer",
        "value": "15",
        "description": "The integer constant SIM_STAT_ASSET_DOWNLOADS has the value 15"
    },
    {
        "name": "SIM_STAT_ASSET_UPLOADS",
        "type": "integer",
        "value": "16",
        "description": "The integer constant SIM_STAT_ASSET_UPLOADS has the value 16"
    },
    {
        "name": "SIM_STAT_CHILD_AGENT_COUNT",
        "type": "integer",
        "value": "11",
        "description": "The integer constant SIM_STAT_CHILD_AGENT_COUNT has the value 11"
    },
    {
        "name": "SIM_STAT_FRAME_MS",
        "type": "integer",
        "value": "3",
        "description": "The integer constant SIM_STAT_FRAME_MS has the value 3"
    },
    {
        "name": "SIM_STAT_IMAGE_MS",
        "type": "integer",
        "value": "8",
        "description": "The integer constant SIM_STAT_IMAGE_MS has the value 8"
    },
    {
        "name": "SIM_STAT_IO_PUMP_MS",
        "type": "integer",
        "value": "24",
        "description": "The integer constant SIM_STAT_IO_PUMP_MS has the value 24"
    },
    {
        "name": "SIM_STAT_NET_MS",
        "type": "integer",
        "value": "4",
        "description": "The integer constant SIM_STAT_NET_MS has the value 4"
    },
    {
        "name": "SIM_STAT_OTHER_MS",
        "type": "integer",
        "value": "5",
        "description": "The integer constant SIM_STAT_OTHER_MS has the value 5"
    },
    {
        "name": "SIM_STAT_PACKETS_IN",
        "type": "integer",
        "value": "13",
        "description": "The integer constant SIM_STAT_PACKETS_IN has the value 13"
    },
    {
        "name": "SIM_STAT_PACKETS_OUT",
        "type": "integer",
        "value": "14",
        "description": "The integer constant SIM_STAT_PACKETS_OUT has the value 14"
    },
    {
        "name": "SIM_STAT_PCT_CHARS_STEPPED",
        "type": "integer",
        "value": "0",
        "description": "The integer constant SIM_STAT_PCT_CHARS_STEPPED has the value 0"
    },
    {
        "name": "SIM_STAT_PHYSICS_FPS",
        "type": "integer",
        "value": "1",
        "description": "The integer constant SIM_STAT_PHYSICS_FPS has the value 1"
    },
    {
        "name": "SIM_STAT_PHYSICS_MS",
        "type": "integer",
        "value": "6",
        "description": "The integer constant SIM_STAT_PHYSICS_MS has the value 6"
    },
    {
        "name": "SIM_STAT_PHYSICS_OTHER_MS",
        "type": "integer",
        "value": "20",
        "description": "The integer constant SIM_STAT_PHYSICS_OTHER_MS has the value 20"
    },
    {
        "name": "SIM_STAT_PHYSICS_SHAPE_MS",
        "type": "integer",
        "value": "19",
        "description": "The integer constant SIM_STAT_PHYSICS_SHAPE_MS has the value 19"
    },
    {
        "name": "SIM_STAT_PHYSICS_STEP_MS",
        "type": "integer",
        "value": "18",
        "description": "The integer constant SIM_STAT_PHYSICS_STEP_MS has the value 18"
    },
    {
        "name": "SIM_STAT_SCRIPT_EPS",
        "type": "integer",
        "value": "21",
        "description": "The integer constant SIM_STAT_SCRIPT_EPS has the value 21"
    },
    {
        "name": "SIM_STAT_SCRIPT_MS",
        "type": "integer",
        "value": "9",
        "description": "The integer constant SIM_STAT_SCRIPT_MS has the value 9"
    },
    {
        "name": "SIM_STAT_SCRIPT_RUN_PCT",
        "type": "integer",
        "value": "25",
        "description": "The integer constant SIM_STAT_SCRIPT_RUN_PCT has the value 25"
    },
    {
        "name": "SIM_STAT_SLEEP_MS",
        "type": "integer",
        "value": "23",
        "description": "The integer constant SIM_STAT_SLEEP_MS has the value 23"
    },
    {
        "name": "SIM_STAT_SPARE_MS",
        "type": "integer",
        "value": "22",
        "description": "The integer constant SIM_STAT_SPARE_MS has the value 22"
    },
    {
        "name": "SIM_STAT_UNACKED_BYTES",
        "type": "integer",
        "value": "17",
        "description": "The integer constant SIM_STAT_UNACKED_BYTES has the value 17"
    },
    {
        "name": "SMOOTH",
        "type": "integer",
        "value": "0x010",
        "description": "The integer constant SMOOTH has the value 0x010"
    },
    {
        "name": "SQRT2",
        "type": "float",
        "value": "1.4142135623730950488016887242097f",
        "description": "The float constant SQRT2 has the value 1.4142135623730950488016887242097f"
    },
    {
        "name": "STATUS_BLOCK_GRAB",
        "type": "integer",
        "value": "0x40",
        "description": "The integer constant STATUS_BLOCK_GRAB has the value 0x40\n\nThis status flag keeps the object from being moved by grabs. It will only block grab moves of unlinked prims or the root of a linkset."
    },
    {
        "name": "STATUS_BLOCK_GRAB_OBJECT",
        "type": "integer",
        "value": "0x400",
        "description": "The integer constant STATUS_BLOCK_GRAB_OBJECT has the value 0x400\n\nThis status flag keeps the object from being moved by grabs. This flag applies to the entire linkset.  "
    },
    {
        "name": "STATUS_BLOCK_GRAB_OBJECT",
        "type": "integer",
        "value": "0x400",
        "description": "The integer constant STATUS_BLOCK_GRAB_OBJECT has the value 0x400\n\nThis status flag keeps the object from being moved by grabs. This flag applies to the entire linkset.  "
    },
    {
        "name": "STATUS_CAST_SHADOWS",
        "type": "integer",
        "value": "0x200",
        "description": "The integer constant STATUS_CAST_SHADOWS has the value 0x200\n\nThis status flag would set an object's ability to cast shadows."
    },
    {
        "name": "STATUS_DIE_AT_EDGE",
        "type": "integer",
        "value": "0x80",
        "description": "The integer constant STATUS_DIE_AT_EDGE has the value 0x80\n\nCauses the object to be deleted when it goes off world, this is overridden by STATUS_RETURN_AT_EDGE."
    },
    {
        "name": "STATUS_DIE_AT_NO_ENTRY",
        "type": "integer",
        "value": "0x800",
        "description": "The integer constant STATUS_DIE_AT_NO_ENTRY has the value 0x800\n\nCauses the object to be deleted when it attempts to enter a parcel that prohibits object entry or is full. Overridden by STATUS_DIE_AT_NO_ENTRY. Objects that are no-copy ignore this setting and remain in world."
    },
    {
        "name": "STATUS_INTERNAL_ERROR",
        "type": "integer",
        "value": "1999",
        "description": "The integer constant STATUS_INTERNAL_ERROR has the value 1999"
    },
    {
        "name": "STATUS_MALFORMED_PARAMS",
        "type": "integer",
        "value": "1000",
        "description": "The integer constant STATUS_MALFORMED_PARAMS has the value 1000"
    },
    {
        "name": "STATUS_NOT_FOUND",
        "type": "integer",
        "value": "1003",
        "description": "The integer constant STATUS_NOT_FOUND has the value 1003"
    },
    {
        "name": "STATUS_NOT_SUPPORTED",
        "type": "integer",
        "value": "1004",
        "description": "The integer constant STATUS_NOT_SUPPORTED has the value 1004"
    },
    {
        "name": "STATUS_OK",
        "type": "integer",
        "value": "0",
        "description": "The integer constant STATUS_OK has the value 0"
    },
    {
        "name": "STATUS_PHANTOM",
        "type": "integer",
        "value": "0x10",
        "description": "The integer constant STATUS_PHANTOM has the value 0x10\n\nThis property (set FALSE by default) when set TRUE turns the object un-solid (objects and avatars can pass through it)."
    },
    {
        "name": "STATUS_PHYSICS",
        "type": "integer",
        "value": "0x1",
        "description": "The integer constant STATUS_PHYSICS has the value 0x1\n\nThis property (set FALSE by default) if set TRUE allows that the object is subject to and can offer physical interactions and forces."
    },
    {
        "name": "STATUS_RETURN_AT_EDGE",
        "type": "integer",
        "value": "0x100",
        "description": "The integer constant STATUS_RETURN_AT_EDGE has the value 0x100\n\nCauses the object to be returned when it goes off world, overrides STATUS_DIE_AT_EDGE."
    },
    {
        "name": "STATUS_ROTATE_X",
        "type": "integer",
        "value": "0x2",
        "description": "The integer constant STATUS_ROTATE_X has the value 0x2\n\nThis property (set TRUE by default), if set FALSE, attempts to stop physical rotation on the objects local X axis."
    },
    {
        "name": "STATUS_ROTATE_Y",
        "type": "integer",
        "value": "0x4",
        "description": "The integer constant STATUS_ROTATE_Y has the value 0x4\n\nThis property (set TRUE by default), if set FALSE, attempts to stop physical rotation on the objects local Y axis."
    },
    {
        "name": "STATUS_ROTATE_Z",
        "type": "integer",
        "value": "0x8",
        "description": "The integer constant STATUS_ROTATE_Z has the value 0x8\n\nThis property (set TRUE by default), if set FALSE, attempts to stop physical rotation on the objects local Z axis."
    },
    {
        "name": "STATUS_SANDBOX",
        "type": "integer",
        "value": "0x20",
        "description": "The integer constant STATUS_SANDBOX has the value 0x20\n\nThis status flag keeps the object from getting away."
    },
    {
        "name": "STATUS_TYPE_MISMATCH",
        "type": "integer",
        "value": "1001",
        "description": "The integer constant STATUS_TYPE_MISMATCH has the value 1001"
    },
    {
        "name": "STATUS_WHITELIST_FAILED",
        "type": "integer",
        "value": "2001",
        "description": "The integer constant STATUS_WHITELIST_FAILED has the value 2001"
    },
    {
        "name": "STRING_TRIM",
        "type": "integer",
        "value": "0x03",
        "description": "The integer constant STRING_TRIM has the value 0x03\n\n"
    },
    {
        "name": "STRING_TRIM_HEAD",
        "type": "integer",
        "value": "0x01",
        "description": "The integer constant STRING_TRIM_HEAD has the value 0x01\n\nTrim spaces off the beginning"
    },
    {
        "name": "STRING_TRIM_TAIL",
        "type": "integer",
        "value": "0x02",
        "description": "The integer constant STRING_TRIM_TAIL has the value 0x02\n\nTrim spaces off the end"
    },
    {
        "name": "TARGETED_EMAIL_OBJECT_OWNER",
        "type": "integer",
        "value": "2",
        "description": "The integer constant TARGETED_EMAIL_OBJECT_OWNER has the value 2\n\nCauses the message to be sent to the owner of the calling object"
    },
    {
        "name": "TEXTURE_BLANK",
        "type": "string",
        "value": "\"5748decc-f629-461c-9a36-a35a221fe21f\"",
        "description": "The string constant TEXTURE_BLANK has the value \"5748decc-f629-461c-9a36-a35a221fe21f\"\n\nUUID for the \"Blank\" texture"
    },
    {
        "name": "TEXTURE_MEDIA",
        "type": "string",
        "value": "\"8b5fec65-8d8d-9dc5-cda8-8fdf2716e361\"",
        "description": "The string constant TEXTURE_MEDIA has the value \"8b5fec65-8d8d-9dc5-cda8-8fdf2716e361\"\n\nUUID for the \"Default Media\" texture"
    },
    {
        "name": "TEXTURE_PLYWOOD",
        "type": "string",
        "value": "\"89556747-24cb-43ed-920b-47caed15465f\"",
        "description": "The string constant TEXTURE_PLYWOOD has the value \"89556747-24cb-43ed-920b-47caed15465f\"\n\nUUID for the default \"Plywood\" texture"
    },
    {
        "name": "TEXTURE_DEFAULT",
        "type": "string",
        "value": "\"89556747-24cb-43ed-920b-47caed15465f\"",
        "description": "The string constant TEXTURE_DEFAULT also has the value \"89556747-24cb-43ed-920b-47caed15465f\""
    },
    {
        "name": "TEXTURE_TRANSPARENT",
        "type": "string",
        "value": "\"8dcd4a48-2d37-4909-9f78-f7a9eb4ef903\"",
        "description": "The string constant TEXTURE_TRANSPARENT has the value \"8dcd4a48-2d37-4909-9f78-f7a9eb4ef903\"\n\nUUID for \"*Default Transparent Texture\" in the library, also included with viewers."
    },
    {
        "name": "TOUCH_INVALID_FACE",
        "type": "integer",
        "value": "0xFFFFFFFF",
        "description": "The integer constant TOUCH_INVALID_FACE has the value 0xFFFFFFFF\n\nReturned by llDetectedTouchFace when the touch position is not valid."
    },
    {
        "name": "TOUCH_INVALID_TEXCOORD",
        "type": "vector",
        "value": "<-1.0, -1.0, 0.0>",
        "description": "The vector constant TOUCH_INVALID_TEXCOORD has the value <-1.0, -1.0, 0.0>\n\nReturned by llDetectedTouchUV and llDetectedTouchST when the touch position is not valid."
    },
    {
        "name": "TOUCH_INVALID_VECTOR",
        "type": "vector",
        "value": "<0.0, 0.0, 0.0>",
        "description": "The vector constant TOUCH_INVALID_VECTOR has the value <0.0, 0.0, 0.0>\n\nReturned by llDetectedTouchPos, llDetectedTouchNormal, and llDetectedTouchBinormal when the touch position is not valid."
    },
    {
        "name": "TRAVERSAL_TYPE",
        "type": "integer",
        "value": "7",
        "description": "The integer constant TRAVERSAL_TYPE has the value 7\n\nUsed in combination with one of the traversal type flags. The default is TRAVERSAL_TYPE_SLOW, other options are TRAVERSAL_TYPE_FAST and TRAVERSAL_TYPE_NONE. "
    },
    {
        "name": "TRUE",
        "type": "integer",
        "value": "1",
        "description": "The boolean integer constant TRUE has the value 1\n\nConstant used to define the TRUE value in conditional structures or variables/constants in general. Usually it's used because it is more readable, indicating a boolean value instead a integer value (1). However, this is an arbitrary distinction in LSL which uses integers to represent Boolean values anyway. It is probably better to consider TRUE and FALSE as mnemonic constants for the integer values 1 and 0."
    },
    {
        "name": "TWO_PI",
        "type": "float",
        "value": "6.283185307179586476925286766559f",
        "description": "The float constant TWO_PI has the value 6.283185307179586476925286766559f"
    },
    {
        "name": "TYPE_FLOAT",
        "type": "integer",
        "value": "2",
        "description": "The type integer constant TYPE_FLOAT has the value 2"
    },
    {
        "name": "TYPE_INTEGER",
        "type": "integer",
        "value": "1",
        "description": "The type integer constant TYPE_INTEGER has the value 1"
    },
    {
        "name": "TYPE_INVALID",
        "type": "integer",
        "value": "0",
        "description": "The type integer constant TYPE_INVALID has the value 0"
    },
    {
        "name": "TYPE_KEY",
        "type": "integer",
        "value": "4",
        "description": "The type integer constant TYPE_KEY has the value 4"
    },
    {
        "name": "TYPE_ROTATION",
        "type": "integer",
        "value": "6",
        "description": "The type integer constant TYPE_ROTATION has the value 6"
    },
    {
        "name": "TYPE_STRING",
        "type": "integer",
        "value": "3",
        "description": "The type integer constant TYPE_STRING has the value 3"
    },
    {
        "name": "TYPE_VECTOR",
        "type": "integer",
        "value": "5",
        "description": "The type integer constant TYPE_VECTOR has the value 5"
    },
    {
        "name": "URL_REQUEST_DENIED",
        "type": "string",
        "value": "\"URL_REQUEST_DENIED\"",
        "description": "The string constant URL_REQUEST_DENIED has the value \"URL_REQUEST_DENIED\""
    },
    {
        "name": "URL_REQUEST_GRANTED",
        "type": "string",
        "value": "\"URL_REQUEST_GRANTED\"",
        "description": "The string constant URL_REQUEST_GRANTED has the value \"URL_REQUEST_GRANTED\""
    },
    {
        "name": "VEHICLE_ANGULAR_DEFLECTION_EFFICIENCY",
        "type": "integer",
        "value": "32",
        "description": "The integer constant VEHICLE_ANGULAR_DEFLECTION_EFFICIENCY has the value 32\n\nslider between 0 (no deflection) and 1 (maximum strength)"
    },
    {
        "name": "VEHICLE_ANGULAR_DEFLECTION_TIMESCALE",
        "type": "integer",
        "value": "33",
        "description": "The integer constant VEHICLE_ANGULAR_DEFLECTION_TIMESCALE has the value 33\n\nexponential timescale for the vehicle to achieve full angular deflection"
    },
    {
        "name": "VEHICLE_ANGULAR_FRICTION_TIMESCALE",
        "type": "integer",
        "value": "17",
        "description": "The integer constant VEHICLE_ANGULAR_FRICTION_TIMESCALE has the value 17\n\nvector of timescales for exponential decay of angular velocity about the three vehicle axes"
    },
    {
        "name": "VEHICLE_ANGULAR_MOTOR_DECAY_TIMESCALE",
        "type": "integer",
        "value": "35",
        "description": "The integer constant VEHICLE_ANGULAR_MOTOR_DECAY_TIMESCALE has the value 35\n\nexponential timescale (in seconds) for the angular motor's effectiveness to decay toward zero"
    },
    {
        "name": "VEHICLE_ANGULAR_MOTOR_DIRECTION",
        "type": "integer",
        "value": "19",
        "description": "The integer constant VEHICLE_ANGULAR_MOTOR_DIRECTION has the value 19\n\nvector of angular velocity (in radian/second) that the vehicle will try to achieve"
    },
    {
        "name": "VEHICLE_ANGULAR_MOTOR_TIMESCALE",
        "type": "integer",
        "value": "34",
        "description": "The integer constant VEHICLE_ANGULAR_MOTOR_TIMESCALE has the value 34\n\nexponential timescale for the angular motor to achieve full power"
    },
    {
        "name": "VEHICLE_BANKING_EFFICIENCY",
        "type": "integer",
        "value": "38",
        "description": "The integer constant VEHICLE_BANKING_EFFICIENCY has the value 38\n\nslider between -1.00 (leans out of turns), 0 (no banking) and +1.00 (leans into turns).  This parameter makes banking affect steering, not the other way around.  Use vehicle angular motors to bank the vehicle."
    },
    {
        "name": "VEHICLE_BANKING_MIX",
        "type": "integer",
        "value": "39",
        "description": "The integer constant VEHICLE_BANKING_MIX has the value 39\n\nslider between 0 (static banking) and 1 (dynamic banking)"
    },
    {
        "name": "VEHICLE_BANKING_TIMESCALE",
        "type": "integer",
        "value": "40",
        "description": "The integer constant VEHICLE_BANKING_TIMESCALE has the value 40\n\nexponential timescale for the banking behaviour to take full effect"
    },
    {
        "name": "VEHICLE_BUOYANCY",
        "type": "integer",
        "value": "27",
        "description": "The integer constant VEHICLE_BUOYANCY has the value 27\n\nslider between -1 (double gravity) and 1 (full anti-gravity)"
    },
    {
        "name": "VEHICLE_FLAG_CAMERA_DECOUPLED",
        "type": "integer",
        "value": "0x200",
        "description": "The integer constant VEHICLE_FLAG_CAMERA_DECOUPLED has the value 0x200\n\nMakes mouselook camera rotate independently of the vehicle. By default the client mouselook camera will rotate about with the vehicle, however when this flag is set the camera direction is independent of the vehicle's rotation.    When this flag is set, the vehicle will automatically stop turning once it has aligned itself with the pilot's mouselook camera.  When this flag is not set, the vehicle will continuously try aligning itself with a moving target and will not stop turning until the pilot manually re-aligns their mouselook camera with the vehicle's forward axis."
    },
    {
        "name": "VEHICLE_FLAG_HOVER_GLOBAL_HEIGHT",
        "type": "integer",
        "value": "0x010",
        "description": "The integer constant VEHICLE_FLAG_HOVER_GLOBAL_HEIGHT has the value 0x010\n\nHover at global height instead of height above ground or water. "
    },
    {
        "name": "VEHICLE_FLAG_HOVER_TERRAIN_ONLY",
        "type": "integer",
        "value": "0x008",
        "description": "The integer constant VEHICLE_FLAG_HOVER_TERRAIN_ONLY has the value 0x008\n\nMakes the vehicle float over land."
    },
    {
        "name": "VEHICLE_FLAG_HOVER_UP_ONLY",
        "type": "integer",
        "value": "0x020",
        "description": "The integer constant VEHICLE_FLAG_HOVER_UP_ONLY has the value 0x020"
    },
    {
        "name": "VEHICLE_FLAG_HOVER_WATER_ONLY",
        "type": "integer",
        "value": "0x004",
        "description": "The integer constant VEHICLE_FLAG_HOVER_WATER_ONLY has the value 0x004\n\nMakes the vehicle over water."
    },
    {
        "name": "VEHICLE_FLAG_LIMIT_MOTOR_UP",
        "type": "integer",
        "value": "0x080",
        "description": "The integer constant VEHICLE_FLAG_LIMIT_MOTOR_UP has the value 0x080"
    },
    {
        "name": "VEHICLE_FLAG_LIMIT_ROLL_ONLY",
        "type": "integer",
        "value": "0x002",
        "description": "The integer constant VEHICLE_FLAG_LIMIT_ROLL_ONLY has the value 0x002"
    },
    {
        "name": "VEHICLE_FLAG_MOUSELOOK_BANK",
        "type": "integer",
        "value": "0x200",
        "description": "The integer constant VEHICLE_FLAG_MOUSELOOK_BANK has the value 0x200"
    },
    {
        "name": "VEHICLE_FLAG_MOUSELOOK_STEER",
        "type": "integer",
        "value": "0x100",
        "description": "The integer constant VEHICLE_FLAG_MOUSELOOK_STEER has the value 0x100"
    },
    {
        "name": "VEHICLE_FLAG_NO_DEFLECTION_UP",
        "type": "integer",
        "value": "0x001",
        "description": "The integer constant VEHICLE_FLAG_NO_DEFLECTION_UP has the value 0x001"
    },
    {
        "name": "VEHICLE_FLAG_NO_FLY_UP",
        "type": "integer",
        "value": "0x001",
        "description": "The integer constant VEHICLE_FLAG_NO_FLY_UP also has the value 0x001"
    },
    {
        "name": "VEHICLE_HOVER_EFFICIENCY",
        "type": "integer",
        "value": "25",
        "description": "The integer constant VEHICLE_HOVER_EFFICIENCY has the value 25\n\nslider between 0 (bouncy) and 1 (critically damped) hover behaviour"
    },
    {
        "name": "VEHICLE_HOVER_HEIGHT",
        "type": "integer",
        "value": "24",
        "description": "The integer constant VEHICLE_HOVER_HEIGHT has the value 24\n\nheight the vehicle will try to hover above ground. Set to zero to disable hover."
    },
    {
        "name": "VEHICLE_HOVER_TIMESCALE",
        "type": "integer",
        "value": "26",
        "description": "The integer constant VEHICLE_HOVER_TIMESCALE has the value 26\n\nPeriod of time (in seconds) for the vehicle to achieve its hover height"
    },
    {
        "name": "VEHICLE_LINEAR_DEFLECTION_EFFICIENCY",
        "type": "integer",
        "value": "28",
        "description": "The integer constant VEHICLE_LINEAR_DEFLECTION_EFFICIENCY has the value 28\n\nslider between 0 (no deflection) and 1 (maximum strength)"
    },
    {
        "name": "VEHICLE_LINEAR_DEFLECTION_TIMESCALE",
        "type": "integer",
        "value": "31",
        "description": "The integer constant VEHICLE_LINEAR_DEFLECTION_TIMESCALE has the value 31\n\nexponential timescale for the vehicle to redirect its velocity to its x-axis"
    },
    {
        "name": "VEHICLE_LINEAR_FRICTION_TIMESCALE",
        "type": "integer",
        "value": "16",
        "description": "The integer constant VEHICLE_LINEAR_FRICTION_TIMESCALE has the value 16\n\nvector of timescales for exponential decay of linear velocity about the three vehicle axes"
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_DECAY_TIMESCALE",
        "type": "integer",
        "value": "31",
        "description": "The integer constant VEHICLE_LINEAR_MOTOR_DECAY_TIMESCALE has the value 31\n\nexponential timescale (in seconds) for the linear motor's effectiveness to decay toward zero"
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_DIRECTION",
        "type": "integer",
        "value": "18",
        "description": "The integer constant VEHICLE_LINEAR_MOTOR_DIRECTION has the value 18\n\nVector of linear velocity (in meters/second) that the vehicle will try to achieve."
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_OFFSET",
        "type": "integer",
        "value": "20",
        "description": "The integer constant VEHICLE_LINEAR_MOTOR_OFFSET has the value 20\n\nUsed with llSetVehicleVectorParam to set the offset for where the linear motor is to be applied from the vehicle's center of mass."
    },
    {
        "name": "VEHICLE_LINEAR_MOTOR_TIMESCALE",
        "type": "integer",
        "value": "30",
        "description": "The integer constant VEHICLE_LINEAR_MOTOR_TIMESCALE has the value 30\n\nexponential timescale for the vehicle to achieve its full linear motor velocity"
    },
    {
        "name": "VEHICLE_REFERENCE_FRAME",
        "type": "integer",
        "value": "44",
        "description": "The integer constant VEHICLE_REFERENCE_FRAME has the value 44\n\nUsed to set the rotation of vehicle axes relative to local frame."
    },
    {
        "name": "VEHICLE_TYPE_AIRPLANE",
        "type": "integer",
        "value": "4",
        "description": "The integer constant VEHICLE_TYPE_AIRPLANE has the value 4\n\nUses linear deflection for lift, no hover, and banking to turn."
    },
    {
        "name": "VEHICLE_TYPE_BALLOON",
        "type": "integer",
        "value": "5",
        "description": "The integer constant VEHICLE_TYPE_BALLOON has the value 5\n\nHover, and friction, but no deflection."
    },
    {
        "name": "VEHICLE_TYPE_BOAT",
        "type": "integer",
        "value": "3",
        "description": "The integer constant VEHICLE_TYPE_BOAT has the value 3\n\nHovers over water with lots of friction and some anglar deflection."
    },
    {
        "name": "VEHICLE_TYPE_CAR",
        "type": "integer",
        "value": "2",
        "description": "The integer constant VEHICLE_TYPE_CAR has the value 2\n\nAnother vehicle that bounces along the ground but needs the motors to be driven from external controls ortimer events."
    },
    {
        "name": "VEHICLE_TYPE_NONE",
        "type": "integer",
        "value": "0",
        "description": "The integer constant VEHICLE_TYPE_NONE has the value 0\n\nTurns off vehicle support"
    },
    {
        "name": "VEHICLE_TYPE_SLED",
        "type": "integer",
        "value": "1",
        "description": "The integer constant VEHICLE_TYPE_SLED has the value 1\n\nSimple vehicle that bumps along the ground, and likes to move along it’s local x-axis."
    },
    {
        "name": "VEHICLE_VERTICAL_ATTRACTION_EFFICIENCY",
        "type": "integer",
        "value": "36",
        "description": "The integer constant VEHICLE_VERTICAL_ATTRACTION_EFFICIENCY has the value 36\n\nslider between 0 (bouncy) and 1 (critically damped) attraction of vehicle's z-axis to orient to the world's z axis (up)"
    },
    {
        "name": "VEHICLE_VERTICAL_ATTRACTION_TIMESCALE",
        "type": "integer",
        "value": "37",
        "description": "The integer constant VEHICLE_VERTICAL_ATTRACTION_TIMESCALE has the value 37\n\nexponential timescale (in seconds) for the vehicle to align its z-axis to the world z-axis"
    },
    {
        "name": "VERTICAL",
        "type": "integer",
        "value": "0",
        "description": "The integer constant VERTICAL has the value 0\n\nConstant to indicate that the orientation of the capsule for a Pathfinding character is vertical."
    },
    {
        "name": "ZERO_ROTATION",
        "type": "rotation",
        "value": "<0.0, 0.0, 0.0, 1.0>",
        "description": "The rotation constant ZERO_ROTATION has the value <0.0, 0.0, 0.0, 1.0>"
    },
    {
        "name": "ZERO_VECTOR",
        "type": "vector",
        "value": "<0.0, 0.0, 0.0>",
        "description": "The vector constant ZERO_VECTOR has the value <0.0, 0.0, 0.0>"
    }
]