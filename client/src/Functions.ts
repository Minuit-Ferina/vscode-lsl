import {Directory} from './directory';

export const Functions = new Directory([
    {
        "name": "llAbs",
        "description": "Returns an integer that is the positive version of val.",
        "returnType": "integer",
        "param": [
            {
                "name": "val",
                "description": "Any integer value",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAcos",
        "description": "Returns a float that is the arccosine in radians of val",
        "returnType": "float",
        "param": [
            {
                "name": "val",
                "description": "must fall in the range [-1.0, 1.0]",
                "type": "float"
            }
        ]
    },
    {
        "name": "llAddToLandBanList",
        "description": "Add avatar to the land ban list for hours, or indefinitely if hours is zero.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID",
                "type": "key"
            },
            {
                "name": "hours",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llAddToLandPassList",
        "description": "Add avatar to the land pass list for hours, or indefinitely if hours is zero.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID",
                "type": "key"
            },
            {
                "name": "hours",
                "description": "range [0.0, 144.0]",
                "type": "float"
            }
        ]
    },
    {
        "name": "llAdjustSoundVolume",
        "description": "Adjusts volume of attached sound.",
        "returnType": "",
        "param": [
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLinkAdjustSoundVolume",
        "description": "Adjusts volume of attached sound.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlAdjustSoundVolume",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llAgentInExperience",
        "description": "Determines whether or not the specified agent is in the script's experience.\n\nReturns a boolean (an integer) that is TRUE if the agent is in the experience and the experience can run in the current region.",
        "returnType": "integer",
        "param": [
            {
                "name": "agent",
                "description": "avatar  UUID that is in the same region to query.",
                "type": "key"
            }
        ]
    },
    {
        "name": "llAllowInventoryDrop",
        "description": "Allows for all users without modify permissions to add inventory items to a prim.",
        "returnType": "",
        "param": [
            {
                "name": "add",
                "description": "boolean,  If TRUE it allows anyone, even if they don't have modify rights to a prim, regardless of whether they are the owner or not, to drop items into that prim, If FALSE (default) inventory dropping can still be done, but it is restricted only to people with modify permissions to that prim",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAngleBetween",
        "description": "Returns a float that is the angle in radians between rotation a and rotation b.",
        "returnType": "float",
        "param": [
            {
                "name": "a",
                "description": "start rotation",
                "type": "rotation"
            },
            {
                "name": "b",
                "description": "end rotation",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llApplyImpulse",
        "description": "Applies impulse to object",
        "returnType": "",
        "param": [
            {
                "name": "momentum",
                "description": "",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean,  if TRUE momentum is treated as a local directional vector, if FALSE momentum is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llApplyRotationalImpulse",
        "description": "Applies rotational impulse to object.",
        "returnType": "",
        "param": [
            {
                "name": "force",
                "description": "",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean,  if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAsin",
        "description": "Returns a float that is the arcsine in radians of val",
        "returnType": "float",
        "param": [
            {
                "name": "val",
                "description": "must fall in the range [-1.0, 1.0]",
                "type": "float"
            }
        ]
    },
    {
        "name": "llAtan2",
        "description": "Returns a float that is the  arctangent2 of y, x.",
        "returnType": "float",
        "param": [
            {
                "name": "y",
                "description": "",
                "type": "float"
            },
            {
                "name": "x",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llAttachToAvatar",
        "description": "Attaches the object to the avatar who has granted permission to the script. The object is taken into the users inventory and attached to attach_point.",
        "returnType": "",
        "param": [
            {
                "name": "attach_point",
                "description": "ATTACH_* constant or valid value (see the tables below)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAttachToAvatarTemp",
        "description": "Follows the same convention as llAttachToAvatar, with the exception that the object will not create new inventory for the user, and will disappear on detach or disconnect. Also, this function can be used on avis other than the owner (if granted permission) in which case the ownership is changed to the new wearer.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlAttachToAvatarTemp",
        "param": [
            {
                "name": "attach_point",
                "description": "ATTACH_* constant or valid value (see the tables below)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAvatarOnLinkSitTarget",
        "description": "Returns a key that is the UUID of the user seated on the prim.",
        "returnType": "key",
        "param": [
            {
                "name": "link",
                "description": "Link number (1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAvatarOnSitTarget",
        "description": "Returns a key that is the UUID of the user seated on the prim.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llAxes2Rot",
        "description": "Returns a rotation that is defined by the 3 coordinate axes",
        "returnType": "rotation",
        "param": [
            {
                "name": "fwd",
                "description": "",
                "type": "vector"
            },
            {
                "name": "left",
                "description": "",
                "type": "vector"
            },
            {
                "name": "up",
                "description": "",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llAxisAngle2Rot",
        "description": "Returns a rotation that is a generated angle about axis",
        "returnType": "rotation",
        "param": [
            {
                "name": "axis",
                "description": "",
                "type": "vector"
            },
            {
                "name": "angle",
                "description": "expressed in radians.",
                "type": "float"
            }
        ]
    },
    {
        "name": "llBase64ToInteger",
        "description": "Returns an integer that is str Base64 decoded as a big endian integer.",
        "returnType": "integer",
        "param": [
            {
                "name": "str",
                "description": "Base64 string",
                "type": "string"
            }
        ]
    },
    {
        "name": "llBase64ToString",
        "description": "Returns a string that is the Base64 str decoded into a conventional string.",
        "returnType": "string",
        "param": [
            {
                "name": "str",
                "description": "Base64 string",
                "type": "string"
            }
        ]
    },
    {
        "name": "llBreakAllLinks",
        "description": "Delinks all prims in the link set.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llBreakLink",
        "description": "Delinks the prim with the given link number in a linked object set",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars)  ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llCastRay",
        "description": "Cast a line from start to end and report collision data for intersections with objects.\n\nReturns a list of strided values on a successful hit, with an additional integer status_code on the end.",
        "returnType": "list",
        "param": [
            {
                "name": "start",
                "description": "starting location",
                "type": "vector"
            },
            {
                "name": "end",
                "description": "ending location",
                "type": "vector"
            },
            {
                "name": "options",
                "description": "can consists of any number of option flags and their parameters.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llCeil",
        "description": "Returns an integer that is the integer value of val rounded towards positive infinity (return >= val).",
        "returnType": "integer",
        "param": [
            {
                "name": "val",
                "description": "Any valid float value",
                "type": "float"
            }
        ]
    },
    {
        "name": "llChar",
        "description": "Construct a single character string from the supplied Unicode value.\n\nReturns a string ",
        "returnType": "string",
        "param": [
            {
                "name": "val",
                "description": "Unicode value for character.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llClearCameraParams",
        "description": "Resets all camera parameters to default values and turns off scripted camera control.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llClearLinkMedia",
        "description": "Clears (deletes) the media and all params from the given face on the linked prim(s).\n\nReturns a status (an integer) that is a STATUS_* flag which details the success/failure of the operation.",
        "returnType": "integer",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "face",
                "description": "face number",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llClearPrimMedia",
        "description": "Clears (deletes) the media and all params from the given face.\n\nReturns a status (an integer) that is a STATUS_* flag which details the success/failure of the operation.",
        "returnType": "integer",
        "param": [
            {
                "name": "face",
                "description": "face number",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llCloseRemoteDataChannel",
        "description": "Closes XML-RPC channel.",
        "returnType": "",
        "param": [
            {
                "name": "channel",
                "description": "",
                "type": "key"
            }
        ]
    },
    {
        "name": "llCollisionFilter",
        "description": "Sets the collision filter, exclusively or inclusively.",
        "returnType": "",
        "param": [
            {
                "name": "name",
                "description": "filter for specific object name or avatar legacy name",
                "type": "string"
            },
            {
                "name": "id",
                "description": "filter by group, avatar or object UUID",
                "type": "key"
            },
            {
                "name": "accept",
                "description": "TRUE only process collisions that match,  FALSE instead excludes matches",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llCollisionSound",
        "description": "Suppress default collision sounds, replace default impact sounds with impact_sound at the volume impact_volume",
        "returnType": "",
        "param": [
            {
                "name": "impact_sound",
                "description": "a sound in the inventory of the prim this script is in, a UUID of a sound or an empty string",
                "type": "string"
            },
            {
                "name": "impact_volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= impact_volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llCollisionSprite",
        "description": "Suppress default collision sprites, replace default impact sprite with impact_sprite",
        "returnType": "",
        "param": [
            {
                "name": "impact_sprite",
                "description": "a texture in the inventory of the prim this script is in, a UUID of a texture or an empty string",
                "type": "string"
            }
        ]
    },
    {
        "name": "llCos",
        "description": "Returns a float that is the cosine of theta.",
        "returnType": "float",
        "param": [
            {
                "name": "theta",
                "description": "angle expressed in radians",
                "type": "float"
            }
        ]
    },
    {
        "name": "llCreateCharacter",
        "description": "Creates a pathfinding entity, known as a \"character\", from the object containing the script.  Required to activate use of pathfinding functions.",
        "returnType": "",
        "param": [
            {
                "name": "options",
                "description": "Character configuration options.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llCreateKeyValue",
        "description": "Start an asynchronous transaction to create a key-value pair associated with the script's Experience using the given key (k) and value (v).\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed.",
        "returnType": "key",
        "param": [
            {
                "name": "k",
                "description": "The key for the key-value pair",
                "type": "string"
            },
            {
                "name": "v",
                "description": "The value for the key-value pair.  Maximum 2047 characters, or 4095 if using Mono.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llCreateLink",
        "description": "Attempt to link the script's object with target.",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "prim UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "parent",
                "description": "If FALSE, then target becomes the root. If TRUE, then the script's object becomes the root.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llCSV2List",
        "description": "This function takes a string of values separated by commas, and turns it into a list.\n\nReturns a list made by parsing src, a string of comma separated values.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llDataSizeKeyValue",
        "description": "Start an asynchronous transaction to request the used and total amount of data allocated for the Experience.\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llDeleteCharacter",
        "description": "Convert the object back to a standard object, removing all pathfinding properties.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llDeleteKeyValue",
        "description": "Start an asynchronous transaction to delete a key-value pair associated with the script's Experience with the given key (k).\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.",
        "returnType": "key",
        "param": [
            {
                "name": "k",
                "description": "The key for the key-value pairThe key for the key-value pair",
                "type": "string"
            }
        ]
    },
    {
        "name": "llDeleteSubList",
        "description": "Returns a list that is a copy of src but with the slice from start to end removed.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "source",
                "type": "list"
            },
            {
                "name": "start",
                "description": "start index",
                "type": "integer"
            },
            {
                "name": "end",
                "description": "end index",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDeleteSubString",
        "description": "Returns a string that is the result of removing characters from src from start to end.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            },
            {
                "name": "start",
                "description": "start index",
                "type": "integer"
            },
            {
                "name": "end",
                "description": "end index",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetachFromAvatar",
        "description": "Detach object from avatar.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llDetectedGrab",
        "description": "Returns a vector that is the grab offset of the user touching the object; only works in the touch event.",
        "returnType": "vector",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedGroup",
        "description": "Returns an integer that is TRUE if the detected object or agent has the same active group as the prim containing the script. Otherwise FALSE is returned.",
        "returnType": "integer",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedKey",
        "description": "Returns a key that is the UUID of the detected object or avatar number.",
        "returnType": "key",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedLinkNumber",
        "description": "Returns the link_number (an integer) of the triggered event. If not supported by the event, returns zero.",
        "returnType": "integer",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedName",
        "description": "Returns a string that is the name of the detected item.",
        "returnType": "string",
        "param": [
            {
                "name": "item",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedOwner",
        "description": "Returns the key (UUID) of the owner of the object.",
        "returnType": "key",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedPos",
        "description": "Returns a vector that is the position (in region coordinates) of detected object number.",
        "returnType": "vector",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedRot",
        "description": "Returns the rotation of detected object number.",
        "returnType": "rotation",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedTouchBinormal",
        "description": "Returns a vector that is the surface binormal (tangent to the surface, pointing along the positive T (V) direction of tangent space) where the touch event was triggered.  Along with llDetectedTouchNormal, this information can be used to find the tangent space at the touch location.",
        "returnType": "vector",
        "param": [
            {
                "name": "index",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedTouchFace",
        "description": "Returns an integer that is the index of the face the avatar clicked on.",
        "returnType": "integer",
        "param": [
            {
                "name": "index",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedTouchNormal",
        "description": "Returns a vector that is the surface normal (perpendicular to the surface) where the touch event was triggered.  Along with llDetectedTouchBinormal, this information can be used to find the tangent space at the touch location.",
        "returnType": "vector",
        "param": [
            {
                "name": "index",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedTouchPos",
        "description": "Returns the vector position where the object was touched in region coordinates, unless it is attached to the HUD, in which case it returns the position in screen space coordinates.",
        "returnType": "vector",
        "param": [
            {
                "name": "index",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedTouchST",
        "description": "Returns a vector that is the surface coordinates for where the prim was touched. The x & y vector positions contain the horizontal (s) & vertical (t) face coordinates respectively (<s, t, 0.0>). Each component is usually in the interval [0.0, 1.0] with the origin in the bottom left corner.[1] With some mesh objects, values of less than 0.0 and higher than 1.0 have been observed.",
        "returnType": "vector",
        "param": [
            {
                "name": "index",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedTouchUV",
        "description": "Returns a vector that is the texture coordinates for where the prim was touched. The x & y vector positions contain the horizontal (u) & vertical (v) texture coordinates respectively (<u, v, 0.0>). Like llDetectedTouchST, the interval of each component will be [0.0, 1.0] unless the texture repeats are set to a non-default value. Increasing or decreasing the texture repeats of the face will change this interval accordingly. Additionally,  unlike with llDetectedTouchST, changing a texture's rotation will change the results of this function.",
        "returnType": "vector",
        "param": [
            {
                "name": "index",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedType",
        "description": "Returns an integer mask that is the types of detected object or avatar.",
        "returnType": "integer",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedVel",
        "description": "Returns the vector velocity of detected object or avatar number.",
        "returnType": "vector",
        "param": [
            {
                "name": "number",
                "description": "Index of detection information",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDialog",
        "description": "Shows a dialog box in the lower right corner of the avatar's screen (upper right in Viewer 1.x) with a message and choice buttons, as well as an ignore button. This has many uses ranging from simple message delivery to complex menu systems.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "message",
                "description": "message to be displayed in the dialog box",
                "type": "string"
            },
            {
                "name": "buttons",
                "description": "button labels",
                "type": "list"
            },
            {
                "name": "channel",
                "description": "output chat channel, any integer value",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDie",
        "description": "Deletes the object. The object does not go to the owners Inventory:Trash.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llDumpList2String",
        "description": "Returns a string that is the list src converted to a string with separator between the entries.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "list"
            },
            {
                "name": "separator",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llEdgeOfWorld",
        "description": "Checks to see whether the border hit by dir from pos is the edge of the world (has no neighboring simulator).\n\nReturns a boolean (an integer) value. FALSE indicating there is a simulator in the direction indicated.",
        "returnType": "integer",
        "param": [
            {
                "name": "pos",
                "description": "position in region coordinates",
                "type": "vector"
            },
            {
                "name": "dir",
                "description": "direction",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llEjectFromLand",
        "description": "Ejects avatar from the parcel.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llEmail",
        "description": "Sends an email to address with subject and message.",
        "returnType": "",
        "param": [
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
            }
        ]
    },
    {
        "name": "llEscapeURL",
        "description": "Returns a string that is the escaped/encoded version of url, replacing spaces with \"%20\" etc. The function will escape any character not in [a-zA-Z0-9] to \"%xx\" where \"xx\" is the  hexadecimal value of the character in  UTF-8  byte form.",
        "returnType": "string",
        "param": [
            {
                "name": "url",
                "description": "A (preferably valid and unescaped URL) string.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llEuler2Rot",
        "description": "Returns a rotation representation of the  Euler Angles v.",
        "returnType": "rotation",
        "param": [
            {
                "name": "v",
                "description": "Angle",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llEvade",
        "description": "Characters will (roughly) try to hide from their pursuers if there is a good hiding spot along their fleeing path. Hiding means no direct line of sight from the head of the character (center of the top of its physics bounding box) to the head of its pursuer and no direct path between the two on the navmesh.",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "group, avatar or object UUID to evade",
                "type": "key"
            },
            {
                "name": "options",
                "description": "No options currently available",
                "type": "list"
            }
        ]
    },
    {
        "name": "llExecCharacterCmd",
        "description": "Send a command to the pathing system.",
        "returnType": "",
        "param": [
            {
                "name": "command",
                "description": "Command to be sent.",
                "type": "integer"
            },
            {
                "name": "options",
                "description": "CHARACTER_CMD_*",
                "type": "list"
            }
        ]
    },
    {
        "name": "llFabs",
        "description": "Returns a float that is the positive version of val.",
        "returnType": "float",
        "param": [
            {
                "name": "val",
                "description": "Any valid float value",
                "type": "float"
            }
        ]
    },
    {
        "name": "llFleeFrom",
        "description": "Directs a character to keep a specific distance from a specific position in the region or adjacent regions.",
        "returnType": "",
        "param": [
            {
                "name": "position",
                "description": "position in region coordinates from which to flee.",
                "type": "vector"
            },
            {
                "name": "distance",
                "description": "Distance in meters to flee from position.",
                "type": "float"
            },
            {
                "name": "options",
                "description": "No options available at this time.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llFloor",
        "description": "Returns an integer that is the integer value of val rounded towards negative infinity (return <= val).",
        "returnType": "integer",
        "param": [
            {
                "name": "val",
                "description": "Any valid float value",
                "type": "float"
            }
        ]
    },
    {
        "name": "llForceMouselook",
        "description": "Sets if a sitting avatar should be forced into mouselook when they sit on this prim.",
        "returnType": "",
        "param": [
            {
                "name": "mouselook",
                "description": "boolean,  if TRUE when an avatar sits on the prim, the avatar will be forced into mouselook mode, if FALSE (default) the avatar will keep their current camera mode.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llFrand",
        "description": "Returns a float that is pseudo random in the range [0.0, mag) or (mag, 0.0].[1]\n\n This means that the returned value can be any value in the range 0.0 to mag including 0.0, but not including the value of mag itself. The sign of mag matches the return.",
        "returnType": "float",
        "param": [
            {
                "name": "mag",
                "description": "Any valid float value",
                "type": "float"
            }
        ]
    },
    {
        "name": "llGenerateKey",
        "description": "Generates a key using Version 5 (SHA-1 hash) UUID generation to create a unique key.\n\nReturns the key generated.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llGetAccel",
        "description": "Returns a vector that is the acceleration of the object in the region frame of reference.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetAgentInfo",
        "description": "Returns a bit field (an integer) containing the agent information about id.",
        "returnType": "integer",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetAgentLanguage",
        "description": "Returns a string that is the language code of the preferred interface language of the user avatar.",
        "returnType": "string",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetAgentList",
        "description": "Requests a list of agents currently in the region, limited by the scope parameter.\n\nReturns a list [key id0, key id1, ..., key idn] or [string error_msg] -  returns avatar keys for all agents in the region limited to the area(s) specified by scope",
        "returnType": "list",
        "param": [
            {
                "name": "scope",
                "description": "AGENT_LIST_* flag specifies the selection scopeAGENT_LIST_PARCEL - returns only agents on the same parcel where the script is running.AGENT_LIST_PARCEL_OWNER - returns only agents on any parcel in the region where the parcel owner is the same as the owner of the parcel under the scripted object.AGENT_LIST_REGION - returns any/all agents in the region.",
                "type": "integer"
            },
            {
                "name": "options",
                "description": "Unused.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetAgentSize",
        "description": "Returns a vector that is an estimated size of the requested avatar.",
        "returnType": "vector",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetAlpha",
        "description": "Returns a float that is the alpha of face.",
        "returnType": "float",
        "param": [
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetAndResetTime",
        "description": "Returns a float that is script time in seconds and then resets the script time to zero.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetAnimation",
        "description": "Returns a string that is the name of the currently playing locomotion animation for avatar id. See the table below.",
        "returnType": "string",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetAnimationList",
        "description": "Returns a list of keys of playing animations for avatar.",
        "returnType": "list",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetAnimationOverride",
        "description": "Returns a string that is the name of the animation that is being used for the specified animation state (anim_state).",
        "returnType": "string",
        "param": [
            {
                "name": "anim_state",
                "description": "animation state",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetAttached",
        "description": "Returns the attach_point (an integer) the object is attached to or zero if it is either not attached or is pending detachment.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetAttachedList",
        "description": "Returns a list of object keys corresponding to public attachments worn by an avatar.",
        "returnType": "list",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetBoundingBox",
        "description": "Returns a list that is the bounding box of object relative to its root prim, in local coordinates.\n\nFormat: [ (vector) min_corner, (vector) max_corner ]",
        "returnType": "list",
        "param": [
            {
                "name": "object",
                "description": "avatar or prim UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetCameraPos",
        "description": "Returns a vector that is the current camera position for the agent the task has permissions for.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetCameraRot",
        "description": "Returns a rotation that is the current camera orientation for the agent the task has permissions for.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetCenterOfMass",
        "description": "Returns the vector position of the object's center of mass in region coordinates.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetClosestNavPoint",
        "description": "Used to get a point on the navmesh that is the closest point to point.\n\nReturns a list containing a single vector which is the closest point on the navmesh to the point provided or an empty list.",
        "returnType": "list",
        "param": [
            {
                "name": "point",
                "description": "A point in region-local space",
                "type": "vector"
            },
            {
                "name": "options",
                "description": "GCNP_* and other flags with their parameters. See options table",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetColor",
        "description": "Returns a vector that is the color on face.",
        "returnType": "vector",
        "param": [
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetCreator",
        "description": "Returns a key for the creator of the prim.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llGetDate",
        "description": "Returns a string that is the current date in the UTC time zone in the format \"YYYY-MM-DD\".",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetDayLength",
        "description": "Return the number of seconds in the day cycle applied to the current parcel. llGetDayLength returns the number of seconds for the current parcel, llGetRegionDayLength is the number of seconds in the day cycle applied to the entire region.\n\nReturns an integer ",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetDayOffset",
        "description": "Return the number of seconds added to the current time before calculating the current environmental time for the parcel.  llGetDayOffset  returns the value for the current parcel, llGetRegionDayOffset produces the same value for the entire region.\n\nReturns an integer ",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetDisplayName",
        "description": "Returns a string that is the non-unique display name of the avatar specified by id.",
        "returnType": "string",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID that is in the same region or is otherwise known to the region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetEnergy",
        "description": "Returns a float that is how much energy is in the object as a percentage of maximum",
        "returnType": "float",
        "url": "https://wiki.secondlife.com/wiki/LlGetEnergy",
        "param": []
    },
    {
        "name": "llGetEnv",
        "description": "Returns a string with the requested data about the region.",
        "returnType": "string",
        "param": [
            {
                "name": "name",
                "description": "The name of the data to request",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetEnvironment",
        "description": "Returns a list containing the current environment values for the parcel or region as a list of attributes. Takes a list of attributes to retrieve in params and returns them in the order requested.",
        "returnType": "list",
        "param": [
            {
                "name": "pos",
                "description": "A position in region coordinates. X and Y are in region coordinates and determine the parcel. If X and Y are both -1, the environment for the region is inspected. Z is the altitude in the region and determines which sky track is accessed.",
                "type": "vector"
            },
            {
                "name": "params",
                "description": "A list of parameters to retrieve from the current environment.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetExperienceDetails",
        "description": "Returns a list of details about the experience. This list has 6 components: [string experience_name, key owner_id, key experience_id, integer state, string state_message, key group_id]",
        "returnType": "list",
        "param": [
            {
                "name": "experience_id",
                "description": "The ID of the experience to query.",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetExperienceErrorMessage",
        "description": "Returns a text description of a particular Experience LSL error constant.\n\nReturns a string describing the error code passed or the string corresponding to error. Returns XP_ERROR_UNKNOWN_ERROR if the error is not a valid error code.",
        "returnType": "string",
        "param": [
            {
                "name": "error",
                "description": "The error code constant to translate.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetForce",
        "description": "Returns a vector that is the force (if the script is physical)",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetFreeMemory",
        "description": "Returns the integer of the number of free bytes of memory the script can use.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetFreeURLs",
        "description": "Returns an integer that is the number of available URLs. If attached, return the URL's remaining for the owner. Otherwise, return the availabe URL's for the sim",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetGeometricCenter",
        "description": "Returns the vector that is the geometric center of the object relative to the root prim.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetGMTclock",
        "description": "Returns a float that is the time in seconds since midnight GMT.  Value appears to be truncated to the second.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetHTTPHeader",
        "description": "Returns a string that is the value for header for request_id.",
        "returnType": "string",
        "param": [
            {
                "name": "request_id",
                "description": "A valid HTTP request key.",
                "type": "key"
            },
            {
                "name": "header",
                "description": "Lower case header value name.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetInventoryAcquireTime",
        "description": "Returns a string with the timestamp that the item was added to the prim's inventory.",
        "returnType": "string",
        "param": [
            {
                "name": "item",
                "description": "an item in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetInventoryCreator",
        "description": "Returns a key of the creator of the inventory item.",
        "returnType": "key",
        "param": [
            {
                "name": "item",
                "description": "an item in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetInventoryKey",
        "description": "Returns a key that is the UUID of the inventory name",
        "returnType": "key",
        "param": [
            {
                "name": "name",
                "description": "an item in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetInventoryName",
        "description": "Returns a string that is the name of the inventory item number of type. Returns an empty string if no item of the specified type is found in the prim's inventory (or there are less than or equal to number items of the type).",
        "returnType": "string",
        "param": [
            {
                "name": "type",
                "description": "INVENTORY_* flag",
                "type": "integer"
            },
            {
                "name": "number",
                "description": "Beginning from 0",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetInventoryNumber",
        "description": "Returns an integer that is the number of items of a given type in the prims inventory.",
        "returnType": "integer",
        "param": [
            {
                "name": "type",
                "description": "INVENTORY_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetInventoryPermMask",
        "description": "Returns a bit field (an integer) of the requested permission category for the inventory item",
        "returnType": "integer",
        "param": [
            {
                "name": "item",
                "description": "an item in the inventory of the prim this script is in",
                "type": "string"
            },
            {
                "name": "category",
                "description": "MASK_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetInventoryType",
        "description": "Returns an integer that is the type of the inventory item name",
        "returnType": "integer",
        "param": [
            {
                "name": "name",
                "description": "name of an inventory item",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetKey",
        "description": "Returns the key of the prim the script is in.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llGetLandOwnerAt",
        "description": "Returns a key that is the land owner at pos.",
        "returnType": "key",
        "param": [
            {
                "name": "pos",
                "description": "region coordinate",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llGetLinkKey",
        "description": "Returns the key of the linked prim link",
        "returnType": "key",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetObjectLinkKey",
        "description": "Returns the key of the linked prim link in the linkset identified by object_id",
        "returnType": "key",
        "url": "https://wiki.secondlife.com/wiki/LlGetLinkKey",
        "param": [
            {
                "name": "object_id",
                "description": "",
                "type": "key"
            },
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetLinkMedia",
        "description": "Get the media params for a particular face on a linked prim, given the desired list of named params.\n\nReturns a parameter list (a list) of values in the order requested.",
        "returnType": "list",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "face",
                "description": "face number",
                "type": "integer"
            },
            {
                "name": "params",
                "description": "a set of names (in no particular order)",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetLinkName",
        "description": "Returns a string that is the name of link in link set",
        "returnType": "string",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetLinkNumber",
        "description": "Returns an integer that is the link number of the prim containing the script.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetLinkNumberOfSides",
        "description": "Returns an integer that is the number of faces (or sides) of the prim link.",
        "returnType": "integer",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetPrimitiveParams",
        "description": "Returns attribute values (a list) for the attributes requested in the params list.",
        "returnType": "list",
        "url": "https://wiki.secondlife.com/wiki/LlGetLinkPrimitiveParams",
        "param": [
            {
                "name": "params",
                "description": "PRIM_* flags",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetLinkPrimitiveParams",
        "description": "Identical to llGetPrimitiveParams except that it acts on the prim specified by the link number given.\n\nReturns attribute values (a list) for the attributes requested in the params list for the link.",
        "returnType": "list",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag to get the parameters of",
                "type": "integer"
            },
            {
                "name": "params",
                "description": "PRIM_* flagsPRIM_* flags",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetListEntryType",
        "description": "Returns the type (an integer) of the entry at index in src.",
        "returnType": "integer",
        "param": [
            {
                "name": "src",
                "description": "List containing the element of interest.",
                "type": "list"
            },
            {
                "name": "index",
                "description": "Index of the element of interest.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetListLength",
        "description": "Returns an integer that is the number of elements in the list src.",
        "returnType": "integer",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetLocalPos",
        "description": "Returns a vector that is the position relative (local) to the root.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetLocalRot",
        "description": "Returns the rotation of the prim relative to the root.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetMass",
        "description": "Returns a float that is the mass of object (in Lindograms) that script is attached to.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetMassMKS",
        "description": "Returns a float that is the mass (in Kilograms) of object that script is attached to. Functionally identical to llGetMass except for the unit used in the return value.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetMaxScaleFactor",
        "description": "Returns a float that is the largest scaling factor that can be used with llScaleByFactor to resize the object.  This maximum is determined by the Linkability Rules and prim scale limits.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetMemoryLimit",
        "description": "Get the maximum memory a script can use.\n\nReturns the integer amount of memory the script can use in bytes.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetMinScaleFactor",
        "description": "Returns a float that is the smallest scaling factor that can be used with llScaleByFactor to resize the object.  This minimum is determined by the prim scale limits.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetMoonDirection",
        "description": "Returns a normalized vector to the current moon position at the location of object containing the script.  llGetMoonDirection is the vector to the parcel's moon, llGetRegionMoonDirection is the vector to region's moon. If there is no custom environment set for the current parcel llGetMoonDirection returns the direction to the region's moon. These functions are altitude aware.\n\nReturns a vector ",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetMoonRotation",
        "description": "Return the rotation applied to the moon for the parcel at the location of the object containing the script.  These function are altitude aware and so will pick up the moon for their current track. llGetRegionMoonRotation returns the rotation applied at the region level, llGetMoonRotation does the same for the parcel.  If there is no custom environment applied to parcel llGetMoonRotation returns the same value as llGetRegionMoonRotation.\n\nReturns a rotation ",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetNextEmail",
        "description": "Get the next queued email that comes from address, with specified subject.",
        "returnType": "",
        "param": [
            {
                "name": "address",
                "description": "Sender's mail address",
                "type": "string"
            },
            {
                "name": "subject",
                "description": "Mail subject",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetNotecardLine",
        "description": "Requests the line line of the notecard name from the dataserver.\n\nReturns the handle (a key) for a dataserver event response.",
        "returnType": "key",
        "param": [
            {
                "name": "name",
                "description": "a notecard in the inventory of the prim this script is in or a UUID of a notecard",
                "type": "string"
            },
            {
                "name": "line",
                "description": "Line number in a notecard (the index starts at zero).",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetNumberOfNotecardLines",
        "description": "Requests the number of lines in notecard name via the dataserver event (cast dataserver value to integer)\n\nReturns the handle (a key) for a dataserver event response.",
        "returnType": "key",
        "param": [
            {
                "name": "name",
                "description": "a notecard in the inventory of the prim this script is in or a UUID of a notecard",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetNumberOfPrims",
        "description": "Returns an integer that is the number of prims in a link set the script is attached to.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetNumberOfSides",
        "description": "Returns an integer that is the number of faces (or sides) of the prim.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetObjectAnimationNames",
        "description": "Returns a list of names of animations playing in the current object",
        "returnType": "list",
        "param": []
    },
    {
        "name": "llGetObjectDesc",
        "description": "Returns a string containing the description of the prim the script is attached to.",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetObjectDetails",
        "description": "Returns a list of the details for id, specifically those requested in params.",
        "returnType": "list",
        "param": [
            {
                "name": "id",
                "description": "avatar or prim UUID that is in the same region or adjacent regions*",
                "type": "key"
            },
            {
                "name": "params",
                "description": "OBJECT_* flags",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetLinkKey",
        "description": "Returns the key of the linked prim link",
        "returnType": "key",
        "url": "https://wiki.secondlife.com/wiki/LlGetLinkKey#llGetObjectLinkKey",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetObjectLinkKey",
        "description": "Returns the key of the linked prim link in the linkset identified by object_id",
        "returnType": "key",
        "param": [
            {
                "name": "object_id",
                "description": "",
                "type": "key"
            },
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetObjectMass",
        "description": "Returns a float that is the mass of id",
        "returnType": "float",
        "param": [
            {
                "name": "id",
                "description": "avatar or object UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetObjectName",
        "description": "Returns a string that is the name of the prim the script is attached to.",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetObjectPermMask",
        "description": "Returns a bit field (an integer) of the requested permission category for the object containing this script.",
        "returnType": "integer",
        "param": [
            {
                "name": "category",
                "description": "MASK_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetObjectPrimCount",
        "description": "Returns an integer that is the total number of prims in the object that contains prim.",
        "returnType": "integer",
        "param": [
            {
                "name": "prim",
                "description": "prim UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetOmega",
        "description": "Returns a vector that is the rotation velocity of the object in radians per second.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetOwner",
        "description": "Returns a key that is the object owner's UUID.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llGetOwnerKey",
        "description": "Returns a key that is the owner of prim id",
        "returnType": "key",
        "param": [
            {
                "name": "id",
                "description": "prim UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetParcelDetails",
        "description": "Returns a list that is the parcel details specified in params (in the same order) for the parcel at pos.",
        "returnType": "list",
        "param": [
            {
                "name": "pos",
                "description": "only x and y are important and to be given in region coordinates",
                "type": "vector"
            },
            {
                "name": "params",
                "description": "a list of PARCEL_DETAILS_* flags.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetParcelFlags",
        "description": "Returns a bit field (an integer) of parcel flags (PARCEL_FLAG_*) for the parcel that includes the point pos.",
        "returnType": "integer",
        "param": [
            {
                "name": "pos",
                "description": "position in region coordinates (z component is ignored)",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llGetParcelMaxPrims",
        "description": "Returns an integer that is the maximum combined land impact allowed for objects on the parcel at pos.",
        "returnType": "integer",
        "param": [
            {
                "name": "pos",
                "description": "position in region coordinates (z component is ignored)",
                "type": "vector"
            },
            {
                "name": "sim_wide",
                "description": "TRUE treats all parcels owned by this parcel owner in the sim in a single maximum,  FALSE determines the max for the specified parcel",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetParcelMusicURL",
        "description": "Returns a string containing the parcel streaming audio URL.",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetParcelMusicURL",
        "description": "Returns a string containing the parcel streaming audio URL.",
        "returnType": "string",
        "url": "https://wiki.secondlife.com/wiki/LlGetParcelMusicURL",
        "param": []
    },
    {
        "name": "llGetParcelPrimOwners",
        "description": "Returns a list of all residents and groups who own objects on the parcel at pos and with individual land impact used. \n\nThe list is formatted as [ key ownerKey1, integer agentImpact1, key ownerKey2, integer agentImpact2, ... ], and sorted by agent/group key with a maximum of 100 strides.",
        "returnType": "list",
        "param": [
            {
                "name": "pos",
                "description": "position in region coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llGetPermissions",
        "description": "Returns an integer bitfield with the script permissions granted",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetPermissionsKey",
        "description": "Returns the avatar (a key) of the avatar that last granted or declined permissions to the script.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llGetPhysicsMaterial",
        "description": "Used to get the physical characteristics of an object.\n\nReturns a list in the form [ float gravity_multiplier, float restitution, float friction, float density ]",
        "returnType": "list",
        "url": "https://wiki.secondlife.com/wiki/LlGetPhysicsMaterial",
        "param": [
            {
                "name": "gravity_multiplier",
                "description": "range [-1.0, +28.0], default: 1.0",
                "type": "float"
            },
            {
                "name": "restitution",
                "description": "range [0.0, 1.0], default: [0.3, 0.9] [1]",
                "type": "float"
            },
            {
                "name": "friction",
                "description": "range [0.0, 255.0], default: [0.2, 0.9][1]",
                "type": "float"
            },
            {
                "name": "density",
                "description": "range [1.0, 22587.0] kg/m^3, default: 1000.0",
                "type": "float"
            }
        ]
    },
    {
        "name": "llGetPos",
        "description": "Returns the vector position of the task in region coordinates",
        "returnType": "vector",
        "url": "https://wiki.secondlife.com/wiki/LlGetPos",
        "param": []
    },
    {
        "name": "llGetPos",
        "description": "Returns the vector position of the task in region coordinates",
        "returnType": "vector",
        "url": "https://wiki.secondlife.com/wiki/LlGetPos",
        "param": []
    },
    {
        "name": "llGetPrimMediaParams",
        "description": "Get the media params for a particular face on an object, given the desired list of names.\n\nReturns a parameter list (a list) of values in the order requested.",
        "returnType": "list",
        "url": "https://wiki.secondlife.com/wiki/LlGetPrimMediaParams",
        "param": [
            {
                "name": "face",
                "description": "face number",
                "type": "integer"
            },
            {
                "name": "params",
                "description": "a set of name (in no particular order)",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetRegionAgentCount",
        "description": "Returns an integer that is the number of avatars in the region.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetRegionCorner",
        "description": "Returns a vector in meters that is the global location of the south-west corner of the region the object is in. The z component is 0.0",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetRegionDayLength",
        "description": "Return the number of seconds in the day cycle applied to the current region. llGetDayLength returns the number of seconds for the current parcel, llGetRegionDayLength is the number of seconds in the day cycle applied to the entire region.\n\nReturns an integer ",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetRegionDayOffset",
        "description": "Return the number of seconds added to the current time before calculating the current environmental time for the region.  llGetDayOffset  returns the value for the current parcel, llGetRegionDayOffset produces the same value for the entire region.\n\nReturns an integer ",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetRegionFlags",
        "description": "Returns an integer that is the region flags (REGION_FLAG_*) for the region the object is in.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetRegionFPS",
        "description": "Returns a float that is the mean region frames per second.",
        "returnType": "float",
        "url": "https://wiki.secondlife.com/wiki/LlGetRegionFPS",
        "param": []
    },
    {
        "name": "llGetRegionMoonDirection",
        "description": "Returns a normalized vector to the current moon position at the location of object containing the script.  llGetMoonDirection is the vector to the parcel's moon, llGetRegionMoonDirection is the vector to region's moon. If there is no custom environment set for the current parcel llGetMoonDirection returns the direction to the region's moon. These functions are altitude aware.\n\nReturns a vector ",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetRegionMoonRotation",
        "description": "Return the rotation applied to the moon for the region at the location of the object containing the script.  These function are altitude aware and so will pick up the moon for their current track. llGetRegionMoonRotation returns the rotation applied at the region level, llGetMoonRotation does the same for the parcel.  If there is no custom environment applied to parcel llGetMoonRotation returns the same value as llGetRegionMoonRotation.\n\nReturns a rotation ",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetRegionName",
        "description": "Returns a string that is the current region name",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetRegionSunDirection",
        "description": "Returns a normalized vector to the current sun position at the location of object containing the script.  llGetSunDirection is the vector to the parcel's sun, llGetRegionSunDirection is the vector to region's sun. If there is no custom environment set for the current parcel llGetSunDirection returns the direction to the region's sun. These functions are altitude aware.\n\nReturns a vector ",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetRegionSunRotation",
        "description": "Return the rotation applied to the sun for the region at the location of the object containing the script.  These functions are altitude aware and so will pick up the sun for their current track. llGetRegionSunRotation returns the rotation applied at the region level, llGetSunRotation does the same for the parcel.  If there is no custom environment applied to parcel llGetSunRotation returns the same value as llGetRegionSunRotation.\n\nReturns a rotation ",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetRegionTimeDilation",
        "description": "Returns a float that is the current time dilation, the value range is [0.0, 1.0], 0.0 (full dilation) and 1.0 (no dilation).[1]",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetRootPosition",
        "description": "Returns a vector that is the region position of the root object of the object script is attached to",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetRootRotation",
        "description": "Returns a rotation that is the region rotation of the root prim of the object.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetRot",
        "description": "Returns a rotation that is the prim's rotation relative to the region's axes.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetScale",
        "description": "Returns a vector that is the scale of the prim.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetScriptName",
        "description": "Returns a string that is the name of the script that called this function.",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetScriptState",
        "description": "Returns a boolean (an integer) that is TRUE if the script is running.",
        "returnType": "integer",
        "param": [
            {
                "name": "script",
                "description": "a script in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGetSimStats",
        "description": "Returns a float that is the requested statistic.",
        "returnType": "float",
        "param": [
            {
                "name": "stat_type",
                "description": "SIM_STAT_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetSimulatorHostname",
        "description": "Returns a string that is the hostname of the machine the script is running on (same as string in viewer Help dialog)",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetSPMaxMemory",
        "description": "Returns the integer of the most bytes used while LlScriptProfiler was last active.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetStartParameter",
        "description": "Returns an integer that is the script start/rez parameter.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetStaticPath",
        "description": "Returns a list of position vectors indicating pathfinding waypoints between positions at start and end, for a character of a given radius. The waypoints this function returns are for the 'static' nav mesh, meaning that objects set to \"movable obstacle\" or \"movable phantom\" are ignored.",
        "returnType": "list",
        "param": [
            {
                "name": "start",
                "description": "Starting position",
                "type": "vector"
            },
            {
                "name": "end",
                "description": "End position",
                "type": "vector"
            },
            {
                "name": "radius",
                "description": "Radius of the character that we're creating a path for, between 0.125m and 5.0m",
                "type": "float"
            },
            {
                "name": "params",
                "description": "Only takes the parameter CHARACTER_TYPE; the options are identical to those used for llCreateCharacter. The default value is CHARACTER_TYPE_NONE",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetStatus",
        "description": "Returns a boolean (an integer) equal to the status of the object.",
        "returnType": "integer",
        "param": [
            {
                "name": "status",
                "description": "A single STATUS_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetSubString",
        "description": "Returns a string that is the substring of src from start to end, leaving the original string intact.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            },
            {
                "name": "start",
                "description": "start index",
                "type": "integer"
            },
            {
                "name": "end",
                "description": "end index",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetSunDirection",
        "description": "Returns a normalized vector to the current sun position at the location of object containing the script.  llGetSunDirection is the vector to the parcel's sun, llGetRegionSunDirection is the vector to region's sun. If there is no custom environment set for the current parcel llGetSunDirection returns the direction to the region's sun. These functions are altitude aware.\n\nReturns a vector ",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetSunRotation",
        "description": "Return the rotation applied to the sun for the parcel at the location of the object containing the script.  These function are altitude aware and so will pick up the sun for their current track. llGetRegionSunRotation returns the rotation applied at the region level, llGetSunRotation does the same for the parcel.  If there is no custom environment applied to parcel llGetSunRotation returns the same value as llGetRegionSunRotation.\n\nReturns a rotation ",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetTexture",
        "description": "Returns a string that is the texture on face",
        "returnType": "string",
        "param": [
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetTextureOffset",
        "description": "Returns a vector that is the texture offset of face in the x (\"U\", horizontal) and y (\"V\", vertical) components. The z component is unused.",
        "returnType": "vector",
        "param": [
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetTextureRot",
        "description": "Returns a float that is the texture rotation, expressed as an angle, on face",
        "returnType": "float",
        "param": [
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetTextureScale",
        "description": "Returns a vector that is the texture scale on face (only the x and y components are used).",
        "returnType": "vector",
        "param": [
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetTime",
        "description": "Returns a float that is script time in seconds with subsecond precision since the script started, was last reset, or call to either llResetTime or llGetAndResetTime.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetTimeOfDay",
        "description": "Returns a float that is the time in seconds with subsecond precision since Second Life midnight or region up-time (time since when the region was brought online/rebooted); whichever is smaller. If the region is configured so the sun stays in a constant position, then the returned value is the region up-time.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetTimestamp",
        "description": "Returns a string that is the current date and time in the UTC time zone in the format \"YYYY-MM-DDThh:mm:ss.ff..fZ\"",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetTorque",
        "description": "Returns a vector that is the torque (if the script is physical)",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetUnixTime",
        "description": "Returns an integer that is the number of seconds elapsed since 00:00 hours, Jan 1, 1970  UTC from the system clock.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetUsedMemory",
        "description": "Returns the integer of the number of bytes of memory currently in use by the script.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetUsername",
        "description": "Returns a string that is the unique username of the avatar specified by id.",
        "returnType": "string",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID that is in the same region or is otherwise known to the region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetVel",
        "description": "Returns a vector that is the velocity of the object.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetVisualParams",
        "description": "Returns a list of the details for agentid requested in params.",
        "returnType": "list",
        "param": [
            {
                "name": "agentid",
                "description": "Avatar ID in the same region.",
                "type": "key"
            },
            {
                "name": "params",
                "description": "List of visual param ids or names.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetWallclock",
        "description": "Returns a float that is the time in seconds since midnight Pacific time (PST/PDT), truncated to whole seconds. That is the same as the time of day in SLT expressed as seconds.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGiveInventory",
        "description": "Give inventory to destination.",
        "returnType": "",
        "param": [
            {
                "name": "destination",
                "description": "avatar or prim UUID",
                "type": "key"
            },
            {
                "name": "inventory",
                "description": "an item in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llGiveInventoryList",
        "description": "Gives inventory items to target, creating a new folder to put them in.",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "avatar or prim UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "folder",
                "description": "folder name to use",
                "type": "string"
            },
            {
                "name": "inventory",
                "description": "a list of items in the inventory of the prim this script is in",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGiveMoney",
        "description": "Transfer amount of L$ money from script owner to destination avatar.\n\nReturns an integer that is always zero. In contrast llTransferLindenDollars returns a key that can be used to match the function call to the resulting transaction_result event and the transaction history.",
        "returnType": "integer",
        "param": [
            {
                "name": "destination",
                "description": "avatar  UUID",
                "type": "key"
            },
            {
                "name": "amount",
                "description": "number of L$, must be greater than zero, (amount > 0)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGround",
        "description": "Returns a float that is the ground height directly below the prim position + offset",
        "returnType": "float",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llGroundContour",
        "description": "Returns a vector that is the ground contour direction below the prim position + offset. The contour is the direction of a contour line at that point, that is the direction in which there is no change in elevation.",
        "returnType": "vector",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llGroundNormal",
        "description": "Returns a vector that is the ground  normal from the current position + offset.",
        "returnType": "vector",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llGroundRepel",
        "description": "Critically damps to height if within height * 0.5 of ground or water level (which ever is higher)",
        "returnType": "",
        "param": [
            {
                "name": "height",
                "description": "Distance above the ground",
                "type": "float"
            },
            {
                "name": "water",
                "description": "boolean, if TRUE then hover above water too.",
                "type": "integer"
            },
            {
                "name": "tau",
                "description": "seconds to critically damp in",
                "type": "float"
            }
        ]
    },
    {
        "name": "llGroundSlope",
        "description": "Returns a vector that is the ground slope below the object position + offset",
        "returnType": "vector",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llHash",
        "description": "Returns a 32bit hash for the provided string.  Returns 0 if the input string is empty.\n\nReturns an integer ",
        "returnType": "integer",
        "param": [
            {
                "name": "val",
                "description": "String to hash.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llHMAC",
        "description": "Returns a string that is the  Base64-encoded  HMAC hash of msg when using hash algorithm algorithm and secret key private_key.",
        "returnType": "string",
        "param": [
            {
                "name": "private_key",
                "description": "",
                "type": "string"
            },
            {
                "name": "msg",
                "description": "",
                "type": "string"
            },
            {
                "name": "algorithm",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llHTTPRequest",
        "description": "Sends an HTTP request to the specified URL with the body of the request and parameters.\n\nReturns a handle (a key) identifying the HTTP request made.",
        "returnType": "key",
        "param": [
            {
                "name": "url",
                "description": "A valid HTTP/HTTPS URL.",
                "type": "string"
            },
            {
                "name": "parameters",
                "description": "configuration parameters, specified as HTTP_* flag-value pairs[ parameter1, value1, parameter2, value2, . . . parameterN, valueN]",
                "type": "list"
            },
            {
                "name": "body",
                "description": "Contents of the request.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llHTTPResponse",
        "description": "Responds to request_id with status and body.",
        "returnType": "",
        "param": [
            {
                "name": "request_id",
                "description": "A valid HTTP request key.",
                "type": "key"
            },
            {
                "name": "status",
                "description": " HTTP Status (200, 400, 404, etc)",
                "type": "integer"
            },
            {
                "name": "body",
                "description": "Contents of the response.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llInsertString",
        "description": "Returns the string dst with src inserted starting at pos.",
        "returnType": "string",
        "param": [
            {
                "name": "dst",
                "description": "destination of insertion",
                "type": "string"
            },
            {
                "name": "pos",
                "description": "position index for insert, first is 0",
                "type": "integer"
            },
            {
                "name": "src",
                "description": "source string to be inserted",
                "type": "string"
            }
        ]
    },
    {
        "name": "llInstantMessage",
        "description": "Sends an Instant Message specified in the string message to the user specified by user.",
        "returnType": "",
        "param": [
            {
                "name": "user",
                "description": "avatar  UUID",
                "type": "key"
            },
            {
                "name": "message",
                "description": "message to be transmitted",
                "type": "string"
            }
        ]
    },
    {
        "name": "llIntegerToBase64",
        "description": "Returns a string that is a Base64 big endian encode of number",
        "returnType": "string",
        "param": [
            {
                "name": "number",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llJson2List",
        "description": "This function takes a string representing JSON, and returns a list of the top level.\n\nReturns a list made by parsing src, a string representing json.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llJsonGetValue",
        "description": "Gets the value indicated by specifiers from the json string.\n\nReturns a string made by parsing json, a string representing json and traversing as specified by specifiers.",
        "returnType": "string",
        "param": [
            {
                "name": "json",
                "description": "",
                "type": "string"
            },
            {
                "name": "specifiers",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llJsonSetValue",
        "description": "Returns, if successful, a new JSON text string which is json with the value indicated by the specifiers list set to value.",
        "returnType": "string",
        "param": [
            {
                "name": "json",
                "description": "source JSON data",
                "type": "string"
            },
            {
                "name": "specifiers",
                "description": "location of the of the value to be added, updated or deleted.",
                "type": "list"
            },
            {
                "name": "value",
                "description": "new value or JSON_DELETE flag.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llJsonValueType",
        "description": "Gets the JSON type for the value in json at the location specifiers.\n\nReturns the string specifying the type of the value at specifiers in json.",
        "returnType": "string",
        "param": [
            {
                "name": "json",
                "description": "A string serialization of a json object.",
                "type": "string"
            },
            {
                "name": "specifiers",
                "description": "A path to a value in the json parameter.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llKey2Name",
        "description": "Returns a string that is the legacy name of the prim or avatar specified by id.",
        "returnType": "string",
        "param": [
            {
                "name": "id",
                "description": "avatar or prim UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llKeyCountKeyValue",
        "description": "Start an asynchronous transaction to request the number of keys with the script's Experience.\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llKeysKeyValue",
        "description": "Start an asynchronous transaction to request a number of keys from the script's Experience.\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed.",
        "returnType": "key",
        "param": [
            {
                "name": "first",
                "description": "Zero-based index of the first key to retrieve",
                "type": "integer"
            },
            {
                "name": "count",
                "description": "Number of keys to retriever",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llLinear2sRGB",
        "description": "Returns a vector Transforms a color specified in linear RGB colorspace into the sRGB colorspace.",
        "returnType": "vector",
        "param": [
            {
                "name": "color",
                "description": "Color in the linear color space.",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llAdjustSoundVolume",
        "description": "Adjusts volume of attached sound.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlLinkAdjustSoundVolume",
        "param": [
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLinkAdjustSoundVolume",
        "description": "Adjusts volume of attached sound.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llParticleSystem",
        "description": "Defines a particle system for the containing prim based on a list of rules.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlLinkParticleSystem",
        "param": [
            {
                "name": "rules",
                "description": "Particle system rules list in the format [ rule1, data1, rule2, data2 . . . rulen, datan ]",
                "type": "list"
            }
        ]
    },
    {
        "name": "llLinkParticleSystem",
        "description": "A particle system defined by a list of rules is set for the prim(s) link.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "Particle system rules list in the format [ rule1, data1, rule2, data2 . . . rulen, datan ]",
                "type": "list"
            }
        ]
    },
    {
        "name": "llLinkPlaySound",
        "description": "Plays attached sound once at volume",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            },
            {
                "name": "flags",
                "description": "Bit flags used to control how the sound is played.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llLinksetDataAvailable",
        "description": "The llLinksetDataAvailable returns the number of bytes available in the linkset's datastore.\n\nReturns an integer number of bytes available in the linkset store.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llLinksetDataCountKeys",
        "description": "The llLinksetDataCountKeys returns the number of unique keys that have been stored in the linkset's datastore.\n\nReturns an integer number of keys used in the linkset store.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llLinksetDataDelete",
        "description": "Removes an unprotected name:value pair from the linkset's datastore. If the pair was created\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be deleted.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataDeleteProtected",
        "description": "The llLinksetDataDeleteProtected function erases a protected name:value pair from the linkset's datastore.\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "url": "https://wiki.secondlife.com/wiki/LlLinksetDataDelete",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be deleted.The key of the linkset name:value pair to be deleted.",
                "type": "string"
            },
            {
                "name": "pass",
                "description": "A pass phrase previously used to protect the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataDelete",
        "description": "Removes an unprotected name:value pair from the linkset's datastore. If the pair was created\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "url": "https://wiki.secondlife.com/wiki/LlLinksetDataDeleteProtected",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be deleted.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataDeleteProtected",
        "description": "The llLinksetDataDeleteProtected function erases a protected name:value pair from the linkset's datastore.\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "url": "https://wiki.secondlife.com/wiki/LlLinksetDataDeleteProtected",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be deleted.The key of the linkset name:value pair to be deleted.",
                "type": "string"
            },
            {
                "name": "pass",
                "description": "A pass phrase previously used to protect the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataFindKeys",
        "description": "The llLinksetDataFindKeys function returns a list of up to count keys from the datastore that match pattern, starting at the one indicated by start. If count is less than 1, then all keys between start and the end which match pattern are returned. If count minus start exceeds the number of matching keys, the returned list will be shorter than count, down to a zero-length list if start equals or exceeds the number of matching keys.\n\nReturns a list of the keys in the datastore.",
        "returnType": "list",
        "param": [
            {
                "name": "pattern",
                "description": "A regular expression describing which keys to return.",
                "type": "string"
            },
            {
                "name": "start",
                "description": "The first key to return.",
                "type": "integer"
            },
            {
                "name": "count",
                "description": "The number of keys to return.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llLinksetDataListKeys",
        "description": "The llLinksetDataListKeys function returns a list of up to count keys in the datastore, starting at the one indicated by start. If count is less than 1, then all keys between start and the end are returned. If count minus start exceeds the total number of keys, the returned list will be shorter than count, down to a zero-length list if start equals or exceeds the total number of keys.\n\nReturns a list of the keys in the datastore, ordered alphabetically.",
        "returnType": "list",
        "param": [
            {
                "name": "start",
                "description": "The first key to return.",
                "type": "integer"
            },
            {
                "name": "count",
                "description": "The number of keys to return.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llLinksetDataRead",
        "description": "Reads an unprotected name:value pair from the linkset's datastore.\n\nReturns a string value corresponding to name",
        "returnType": "string",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be read.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataReadProtected",
        "description": "Reads a protected name:value pair from the datastore.\n\nReturns a string value corresponding to name",
        "returnType": "string",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be read.The key of the name:value pair to be read.",
                "type": "string"
            },
            {
                "name": "pass",
                "description": "The pass phrase protecting the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataRead",
        "description": "Reads an unprotected name:value pair from the linkset's datastore.\n\nReturns a string value corresponding to name",
        "returnType": "string",
        "url": "https://wiki.secondlife.com/wiki/LlLinksetDataReadProtected",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be read.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataReadProtected",
        "description": "Reads a protected name:value pair from the datastore.\n\nReturns a string value corresponding to name",
        "returnType": "string",
        "url": "https://wiki.secondlife.com/wiki/LlLinksetDataReadProtected",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be read.The key of the name:value pair to be read.",
                "type": "string"
            },
            {
                "name": "pass",
                "description": "The pass phrase protecting the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataReset",
        "description": "The llLinksetDataReset function erases all name:value pairs stored in the linkset's datastore.  When this function is called the linkset_data event is triggered in all scripts running in the linkset with an action of LINKSETDATA_RESET.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llLinksetDataWrite",
        "description": "Creates or updates an unprotected name:value pair from the linkset's datastore.\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "param": [
            {
                "name": "name",
                "description": "The key of the name:value pair in the datastore to be updated or created.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The value of the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataWriteProtected",
        "description": "Creates or updates a protected name:value pair from the linkset's datastore. Further attempts to read, write or update the name:value pair must use the protected versions of those functions and must supply the same string that was used in pass.\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "param": [
            {
                "name": "name",
                "description": "The key of the name:value pair in the datastore to be updated or created.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The value of the name:value pair.",
                "type": "string"
            },
            {
                "name": "pass",
                "description": "A pass phrase used to protect the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataWrite",
        "description": "Creates or updates an unprotected name:value pair from the linkset's datastore.\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "url": "https://wiki.secondlife.com/wiki/LlLinksetDataWriteProtected",
        "param": [
            {
                "name": "name",
                "description": "The key of the name:value pair in the datastore to be updated or created.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The value of the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataWriteProtected",
        "description": "Creates or updates a protected name:value pair from the linkset's datastore. Further attempts to read, write or update the name:value pair must use the protected versions of those functions and must supply the same string that was used in pass.\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "url": "https://wiki.secondlife.com/wiki/LlLinksetDataWriteProtected",
        "param": [
            {
                "name": "name",
                "description": "The key of the name:value pair in the datastore to be updated or created.",
                "type": "string"
            },
            {
                "name": "value",
                "description": "The value of the name:value pair.",
                "type": "string"
            },
            {
                "name": "pass",
                "description": "A pass phrase used to protect the name:value pair.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSetSoundQueueing",
        "description": "Set whether attached sounds wait for the current sound to finish. If queue is TRUE, queuing is enabled, if FALSE queuing is disabled. Sound queuing is disabled by default.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlLinkSetSoundQueueing",
        "param": [
            {
                "name": "queue",
                "description": "boolean, sound queuing:  TRUE enables,  FALSE (default) disables",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llLinkSetSoundQueueing",
        "description": "Set whether attached sounds wait for the current sound to finish. If queue is TRUE, queuing is enabled, if FALSE queuing is disabled. Sound queuing is disabled by default.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "queue",
                "description": "boolean, sound queuing:  TRUE enables,  FALSE (default) disables",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetSoundRadius",
        "description": "Establishes a hard cut-off radius for audibility of scripted sounds (both attached and triggered).",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlLinkSetSoundRadius",
        "param": [
            {
                "name": "radius",
                "description": "in meters",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLinkSetSoundRadius",
        "description": "Establishes a hard cut-off radius for audibility of scripted sounds (both attached and triggered).",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "radius",
                "description": "in metersin meters",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLinkSitTarget",
        "description": "Set the sit location for the linked prim(s). The sit location is relative to the prim's position and rotation.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "offset",
                "description": "Additional position for the sit target in local prim coordinates.",
                "type": "vector"
            },
            {
                "name": "rot",
                "description": "Additional rotation for the sit target relative to the prim rotation.",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llStopSound",
        "description": "Stops the attached sound(s) currently playing, if they were started by llLoopSound",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlLinkStopSound",
        "param": []
    },
    {
        "name": "llLinkStopSound",
        "description": "Stops the attached sound(s) currently playing, if they were started by llLoopSound",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2CSV",
        "description": "Returns a string of comma separated values taken in order from src.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llList2Float",
        "description": "Returns a float that is at index in src.",
        "returnType": "float",
        "param": [
            {
                "name": "src",
                "description": "List containing the element of interest.",
                "type": "list"
            },
            {
                "name": "index",
                "description": "Index of the element of interest.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2Integer",
        "description": "Returns an integer that is at index in src.",
        "returnType": "integer",
        "param": [
            {
                "name": "src",
                "description": "List containing the element of interest.",
                "type": "list"
            },
            {
                "name": "index",
                "description": "Index of the element of interest.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2Json",
        "description": "This function takes a list and returns a JSON string of that list as either a json object or json array.\n\nReturns a string that is either values serialized as a JSON type, or if an error was encountered JSON_INVALID.",
        "returnType": "string",
        "param": [
            {
                "name": "type",
                "description": "",
                "type": "string"
            },
            {
                "name": "values",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llList2Key",
        "description": "Returns a key that is at index in src.",
        "returnType": "key",
        "param": [
            {
                "name": "src",
                "description": "List containing the element of interest.",
                "type": "list"
            },
            {
                "name": "index",
                "description": "Index of the element of interest.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2List",
        "description": "Returns a list that is a slice of src from start to end.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "list"
            },
            {
                "name": "start",
                "description": "start index",
                "type": "integer"
            },
            {
                "name": "end",
                "description": "end index",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2ListStrided",
        "description": "Returns a list of all the entries in the strided list whose index is a multiple of stride in the range start to end.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "list"
            },
            {
                "name": "start",
                "description": "start index",
                "type": "integer"
            },
            {
                "name": "end",
                "description": "end index",
                "type": "integer"
            },
            {
                "name": "stride",
                "description": "number of entries per stride, if less than 1 it is assumed to be 1",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2Rot",
        "description": "Returns a rotation that is at index in src.",
        "returnType": "rotation",
        "param": [
            {
                "name": "src",
                "description": "List containing the element of interest.",
                "type": "list"
            },
            {
                "name": "index",
                "description": "Index of the element of interest.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2String",
        "description": "Returns a string that is at index in src.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "List containing the element of interest.",
                "type": "list"
            },
            {
                "name": "index",
                "description": "Index of the element of interest.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2Vector",
        "description": "Returns a vector that is at index in src.",
        "returnType": "vector",
        "param": [
            {
                "name": "src",
                "description": "List containing the element of interest.",
                "type": "list"
            },
            {
                "name": "index",
                "description": "Index of the element of interest.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListen",
        "description": "Sets a handle for msg on channel from name and id.\n\nReturns a handle (an integer) that can be used to deactivate or remove the listen.",
        "returnType": "integer",
        "param": [
            {
                "name": "channel",
                "description": "input chat channel, any integer value (-2147483648 through 2147483647)",
                "type": "integer"
            },
            {
                "name": "name",
                "description": "filter for specific prim name or avatar legacy name",
                "type": "string"
            },
            {
                "name": "id",
                "description": "filter for specific avatar or prim UUID",
                "type": "key"
            },
            {
                "name": "msg",
                "description": "filter for specific message",
                "type": "string"
            }
        ]
    },
    {
        "name": "llListenControl",
        "description": "Makes listen event callback handle active or inactive",
        "returnType": "",
        "param": [
            {
                "name": "handle",
                "description": "handle to control listen event",
                "type": "integer"
            },
            {
                "name": "active",
                "description": "TRUE (default) activates,  FALSE deactivates",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListenRemove",
        "description": "Removes listen event callback handle",
        "returnType": "",
        "param": [
            {
                "name": "handle",
                "description": "handle to control listen event",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListFindList",
        "description": "Returns the integer index of the first instance of test in src.",
        "returnType": "integer",
        "param": [
            {
                "name": "src",
                "description": "what to search in (haystack)",
                "type": "list"
            },
            {
                "name": "test",
                "description": "what to search for (needle)",
                "type": "list"
            }
        ]
    },
    {
        "name": "llListInsertList",
        "description": "Returns a list that contains all the elements from dest but with the elements from src inserted at position start.",
        "returnType": "list",
        "param": [
            {
                "name": "dest",
                "description": "",
                "type": "list"
            },
            {
                "name": "src",
                "description": "",
                "type": "list"
            },
            {
                "name": "start",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListRandomize",
        "description": "Returns a list which is a randomized permutation of src.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "A list you want to randomize.",
                "type": "list"
            },
            {
                "name": "stride",
                "description": "number of entries per stride, if less than 1 it is assumed to be 1",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListReplaceList",
        "description": "Returns a list that is a copy of dest with start through end removed and src inserted at start.",
        "returnType": "list",
        "param": [
            {
                "name": "dest",
                "description": "destination",
                "type": "list"
            },
            {
                "name": "src",
                "description": "source",
                "type": "list"
            },
            {
                "name": "start",
                "description": "start index",
                "type": "integer"
            },
            {
                "name": "end",
                "description": "end index",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListSort",
        "description": "Returns a list that is src sorted by stride.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "List to be sorted.",
                "type": "list"
            },
            {
                "name": "stride",
                "description": "number of entries per stride, if less than 1 it is assumed to be 1",
                "type": "integer"
            },
            {
                "name": "ascending",
                "description": "if TRUE then the sort order is ascending, otherwise the order is descending.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListStatistics",
        "description": "Returns a float that is the result of performing statistical aggregate function operation on src.",
        "returnType": "float",
        "param": [
            {
                "name": "operation",
                "description": "a LIST_STAT_* flag",
                "type": "integer"
            },
            {
                "name": "src",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llLoadURL",
        "description": "Shows dialog to avatar offering to load web page at url with message.\n\nIf user clicks yes, launches the page in their web browser, starting the browser if required.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "message",
                "description": "message to be displayed in the dialog box",
                "type": "string"
            },
            {
                "name": "url",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLog",
        "description": "Returns a float that is the  natural logarithm of val.\n\nIf val <= 0 return 0.0 instead.",
        "returnType": "float",
        "param": [
            {
                "name": "val",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLog10",
        "description": "Returns a float that is the base 10  logarithm of val.\n\nIf val <= 0 return zero instead.",
        "returnType": "float",
        "param": [
            {
                "name": "val",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLookAt",
        "description": "Cause object to point its up axis (positive z) towards target, while keeping its forward axis (positive x) below the horizon.",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "position in region coordinates",
                "type": "vector"
            },
            {
                "name": "strength",
                "description": "",
                "type": "float"
            },
            {
                "name": "damping",
                "description": "seconds to critically damp in",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLoopSound",
        "description": "Plays attached sound looping indefinitely at volume",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLoopSoundMaster",
        "description": "Plays attached sound looping at volume, declares it a sync master.",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLoopSoundSlave",
        "description": "Plays attached sound looping at volume, synced to most audible sync master declared by llLoopSoundMaster.",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llManageEstateAccess",
        "description": "Use to add or remove agents from the estate's agent access or ban lists or groups from the estate's group access list.\n\nReturns a boolean (an integer) TRUE if the call was successful; FALSE if throttled, invalid action, invalid or null id or object owner is not allowed to manage the estate.",
        "returnType": "integer",
        "param": [
            {
                "name": "action",
                "description": "ESTATE_ACCESS_* flag",
                "type": "integer"
            },
            {
                "name": "avatar",
                "description": "avatar or group UUID",
                "type": "key"
            }
        ]
    },
    {
        "name": "llMapDestination",
        "description": "Opens world map centered on simname with pos highlighted.\n\nOnly works for scripts attached to avatar, or during touch events.",
        "returnType": "",
        "param": [
            {
                "name": "simname",
                "description": "Region name",
                "type": "string"
            },
            {
                "name": "pos",
                "description": "position in region coordinates",
                "type": "vector"
            },
            {
                "name": "look_at",
                "description": "position in local coordinates (not used)",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llMD5String",
        "description": "Returns a string of 32 hex characters that is the  MD5 checksum of src with a  salt of \":\"+nonce.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            },
            {
                "name": "nonce",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llMessageLinked",
        "description": "The purpose of this function is to allow scripts in the same object to communicate. It triggers a link_message event with the same parameters num, str, and id in all scripts in the prim(s) described by link.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag, controls which prim(s) receive the link_message. ",
                "type": "integer"
            },
            {
                "name": "num",
                "description": "Value of the second parameter of the resulting link_message event.",
                "type": "integer"
            },
            {
                "name": "str",
                "description": "Value of the third parameter of the resulting link_message event.",
                "type": "string"
            },
            {
                "name": "id",
                "description": "Value of the fourth parameter of the resulting link_message event.",
                "type": "key"
            }
        ]
    },
    {
        "name": "llMinEventDelay",
        "description": "Set the minimum time between events being handled.",
        "returnType": "",
        "param": [
            {
                "name": "delay",
                "description": "time in seconds",
                "type": "float"
            }
        ]
    },
    {
        "name": "llModifyLand",
        "description": "Modify land with action on brush",
        "returnType": "",
        "param": [
            {
                "name": "action",
                "description": "LAND_* flag",
                "type": "integer"
            },
            {
                "name": "brush",
                "description": "LAND_*_BRUSH flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llModPow",
        "description": "Returns an integer that is a raised to the b power, mod c. ( (a**b)%c )",
        "returnType": "integer",
        "param": [
            {
                "name": "a",
                "description": "",
                "type": "integer"
            },
            {
                "name": "b",
                "description": "",
                "type": "integer"
            },
            {
                "name": "c",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llMoveToTarget",
        "description": "Critically damp to target in tau seconds (if the script is physical)",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "position in region coordinates",
                "type": "vector"
            },
            {
                "name": "tau",
                "description": "seconds to critically damp in",
                "type": "float"
            }
        ]
    },
    {
        "name": "llName2Key",
        "description": "Returns a key the Agent ID for the named agent in the region. If there is no agent with the specified name currently signed onto the region, this function returns the value NULL_KEY. Names are always provided in the form \"First[ Last]\" or \"first[.last]\" (first name with an optional last name.) If the last name is omitted a last name of \"Resident\" is assumed. Case is not considered when resolving agent names.",
        "returnType": "key",
        "param": [
            {
                "name": "name",
                "description": "Name of the avatar to retrieve the UUID of.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llNavigateTo",
        "description": "Directs an object to travel to a defined position in the region or adjacent regions.",
        "returnType": "",
        "param": [
            {
                "name": "pos",
                "description": "position in region coordinates for the character to navigate to.",
                "type": "vector"
            },
            {
                "name": "options",
                "description": "List of parameters to control the type of pathfinding used.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llOffsetTexture",
        "description": "Sets the texture u & v offsets for the chosen face.",
        "returnType": "",
        "param": [
            {
                "name": "u",
                "description": "horizontal (x) offset in the interval [-1.0, 1.0]",
                "type": "float"
            },
            {
                "name": "v",
                "description": "vertical (y) offset in the interval [-1.0, 1.0]",
                "type": "float"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llOpenRemoteDataChannel",
        "description": "Creates a channel to listen for XML-RPC calls. Will trigger a remote_data event with channel id once it is available.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llOrd",
        "description": "Calculate the ordinal value for a character in a string.\n\nReturns an integer ",
        "returnType": "integer",
        "param": [
            {
                "name": "val",
                "description": "Source string for character ordinal.",
                "type": "string"
            },
            {
                "name": "index",
                "description": "Index of character ordinal to retrieve.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llOverMyLand",
        "description": "Returns an integer boolean, TRUE if id is over land owned by the script owner, FALSE otherwise.",
        "returnType": "integer",
        "param": [
            {
                "name": "id",
                "description": "group, avatar or object UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llOwnerSay",
        "description": "Says msg to the object's owner only, if the owner is currently in the same region.",
        "returnType": "",
        "param": [
            {
                "name": "msg",
                "description": "message to be transmitted",
                "type": "string"
            }
        ]
    },
    {
        "name": "llParcelMediaCommandList",
        "description": "Controls the playback of movies and other multimedia resources on a parcel or for an agent.",
        "returnType": "",
        "param": [
            {
                "name": "commandList",
                "description": "A list of integer PARCEL_MEDIA_COMMAND_* flags and their parameters",
                "type": "list"
            }
        ]
    },
    {
        "name": "llParcelMediaQuery",
        "description": "Returns a list containing results of query. The results are in the same order as the request.",
        "returnType": "list",
        "param": [
            {
                "name": "query",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llParseString2List",
        "description": "Returns a list that is src broken into a list of strings, discarding separators, keeping spacers, discards any null (empty string) values generated.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "source string",
                "type": "string"
            },
            {
                "name": "separators",
                "description": "separators to be discarded",
                "type": "list"
            },
            {
                "name": "spacers",
                "description": "spacers to be kept",
                "type": "list"
            }
        ]
    },
    {
        "name": "llParseStringKeepNulls",
        "description": "Returns a list that is src broken into a list, discarding separators, keeping spacers, keeping any null values generated.",
        "returnType": "list",
        "param": [
            {
                "name": "src",
                "description": "source string",
                "type": "string"
            },
            {
                "name": "separators",
                "description": "separators to be discarded",
                "type": "list"
            },
            {
                "name": "spacers",
                "description": "spacers to be kept",
                "type": "list"
            }
        ]
    },
    {
        "name": "llParticleSystem",
        "description": "Defines a particle system for the containing prim based on a list of rules.",
        "returnType": "",
        "param": [
            {
                "name": "rules",
                "description": "Particle system rules list in the format [ rule1, data1, rule2, data2 . . . rulen, datan ]",
                "type": "list"
            }
        ]
    },
    {
        "name": "llLinkParticleSystem",
        "description": "A particle system defined by a list of rules is set for the prim(s) link.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "Particle system rules list in the format [ rule1, data1, rule2, data2 . . . rulen, datan ]",
                "type": "list"
            }
        ]
    },
    {
        "name": "llPassCollisions",
        "description": "Sets the pass-collisions prim attribute.",
        "returnType": "",
        "param": [
            {
                "name": "pass",
                "description": "PASS_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llPassTouches",
        "description": "Sets the pass-touches prim attribute.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlPassTouches",
        "param": [
            {
                "name": "pass",
                "description": "PASS_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llPatrolPoints",
        "description": "Sets the object patrolling between the points specified in patrolPoints.",
        "returnType": "",
        "param": [
            {
                "name": "patrolPoints",
                "description": "A list of vectors for the character to travel through sequentially.  The list must contain at least two entries.",
                "type": "list"
            },
            {
                "name": "options",
                "description": "PATROL_* flags and their parameters",
                "type": "list"
            }
        ]
    },
    {
        "name": "llPlaySound",
        "description": "Plays attached sound once at volume",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llPlaySoundSlave",
        "description": "Plays attached sound once at volume, synced to next loop of most audible sync master declared by llLoopSoundMaster.",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llPow",
        "description": "Returns a float that is base raised to the power exponent (baseexponent)",
        "returnType": "float",
        "param": [
            {
                "name": "base",
                "description": "",
                "type": "float"
            },
            {
                "name": "exponent",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llPreloadSound",
        "description": "Preloads sound on viewers within range",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            }
        ]
    },
    {
        "name": "llPursue",
        "description": "Causes the object to pursue target.",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "group, avatar or object UUID to pursue.",
                "type": "key"
            },
            {
                "name": "options",
                "description": "Parameters for pursuit; see below.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llPushObject",
        "description": "Applies impulse and ang_impulse to object target",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "avatar or object UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "impulse",
                "description": "Direction and force of push. Direction is affected by local.",
                "type": "vector"
            },
            {
                "name": "ang_impulse",
                "description": "Rotational force.",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean, if TRUE uses the local axis of target, if FALSE uses the region axis.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llReadKeyValue",
        "description": "Start an asynchronous transaction to read the value associated with the specified key (k) and the script's Experience.\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.",
        "returnType": "key",
        "param": [
            {
                "name": "k",
                "description": "The key for the key-value pair",
                "type": "string"
            }
        ]
    },
    {
        "name": "llRegionSay",
        "description": "Says the string msg on channel number channel that can be heard anywhere in the region by a script listening on channel.",
        "returnType": "",
        "param": [
            {
                "name": "channel",
                "description": "output chat channel, any integer value except zero",
                "type": "integer"
            },
            {
                "name": "msg",
                "description": "message to be transmitted",
                "type": "string"
            }
        ]
    },
    {
        "name": "llRegionSayTo",
        "description": "Says[1] the text supplied in string msg on channel supplied in integer channel to the object or avatar specified by target",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "avatar or prim UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "channel",
                "description": "",
                "type": "integer"
            },
            {
                "name": "msg",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llReleaseControls",
        "description": "Stop taking inputs (that were taken with llTakeControls), dequeues any remaining control events. If PERMISSION_TAKE_CONTROLS was previously granted, it will be revoked.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llReleaseURL",
        "description": "Releases the specified URL, it will no longer be usable.",
        "returnType": "",
        "param": [
            {
                "name": "url",
                "description": "URL to release",
                "type": "string"
            }
        ]
    },
    {
        "name": "llRemoteDataReply",
        "description": "Send an XML-RPC reply on channel to message_id with payload of string sdata and integer idata",
        "returnType": "",
        "param": [
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
                "name": "sdata",
                "description": "",
                "type": "string"
            },
            {
                "name": "idata",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRemoteLoadScriptPin",
        "description": "Copy script name into target and set to running with a start_param only if target's pin matches pin",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "prim UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "name",
                "description": "a script in the inventory of the prim this script is in",
                "type": "string"
            },
            {
                "name": "pin",
                "description": "Must match pin set by llSetRemoteScriptAccessPin",
                "type": "integer"
            },
            {
                "name": "running",
                "description": "boolean,  if TRUE[1] the script is set as running, if FALSE the script is not set as running",
                "type": "integer"
            },
            {
                "name": "start_param",
                "description": "value returned by llGetStartParameter in the target script.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRemoveFromLandBanList",
        "description": "Remove avatar from the land ban list",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID",
                "type": "key"
            }
        ]
    },
    {
        "name": "llRemoveFromLandPassList",
        "description": "Remove avatar from the land pass list.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID",
                "type": "key"
            }
        ]
    },
    {
        "name": "llRemoveInventory",
        "description": "Remove the named inventory item",
        "returnType": "",
        "param": [
            {
                "name": "item",
                "description": "an item in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llRemoveVehicleFlags",
        "description": "Disable the specified vehicle flags",
        "returnType": "",
        "param": [
            {
                "name": "flags",
                "description": "mask of VEHICLE_FLAG_* flags",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llReplaceAgentEnvironment",
        "description": "The llReplaceAgentEnvironment function overrides the current region and parcel environment seen by an agent. The new environment persists until the agent crosses to a new region or this function is called with the NULL_KEY or empty string in the environment parameter for the particular agent, doing so will strip all environmental settings applied to this agent as part of the experience. This function must be executed as part of an experience.\n\nReturns an Integer ",
        "returnType": "Integer",
        "param": [
            {
                "name": "agent_id",
                "description": "The key for an agent in the region. The agent must be in the region and must be participating in the experience.",
                "type": "key"
            },
            {
                "name": "transition",
                "description": "The number of seconds over which to transition to the new settings.",
                "type": "float"
            },
            {
                "name": "environment",
                "description": "The name of an environmental setting in the object's inventory or the asset ID for an environment.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llReplaceEnvironment",
        "description": "The llReplaceEnvironment function replaces the environment in a parcel or a region. Either for a single elevation track or the entire environment. The owner of the script must have permission to edit the environment on the destination parcel, or be an estate manage in the case of an entire region.In most cases errors are reported as a return value from the function (see table below). However, issues with the environment assets may be reported in the debug chat.\n\nReturns an Integer ",
        "returnType": "Integer",
        "param": [
            {
                "name": "position",
                "description": "The position in the region of the parcel that will receive the new environment. To change the entire region use <-1, -1, -1>. The z component of the vector is ignored.",
                "type": "vector"
            },
            {
                "name": "environment",
                "description": "The name of an environmental setting in the object's inventory or the asset ID for an environment. NULL_KEY or empty string to remove the environment.",
                "type": "string"
            },
            {
                "name": "track_no",
                "description": "The elevation zone to change. 0 for water, 1 for ground level, 2 for sky 1000m, 3 for sky 2000m, 4 for sky 3000m. -1 to change all tracks.",
                "type": "integer"
            },
            {
                "name": "day_length",
                "description": "The length in seconds for the day cycle. -1 to leave unchanged.",
                "type": "integer"
            },
            {
                "name": "day_offset",
                "description": "The offset in seconds from UTC. -1 to leave unchanged.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llReplaceSubString",
        "description": "Returns a string that is the result of replacing the first count matching instances pattern in src with replacement_pattern.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            },
            {
                "name": "pattern",
                "description": "",
                "type": "string"
            },
            {
                "name": "replacement_pattern",
                "description": "",
                "type": "string"
            },
            {
                "name": "count",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRequestAgentData",
        "description": "Requests data about agent id. When data is available the dataserver event will be raised\n\nReturns the handle (a key) for the dataserver event when it is raised.",
        "returnType": "key",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID",
                "type": "key"
            },
            {
                "name": "data",
                "description": "DATA_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRequestDisplayName",
        "description": "Requests the Display Name of the agent identified by id. When the Display Name is available the dataserver event will be raised. The agent identified by id does not need to be in the same region or online at the time of the request.\n\nReturns the handle (a key) that is used to identify the dataserver event when it is raised.",
        "returnType": "key",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID",
                "type": "key"
            }
        ]
    },
    {
        "name": "llRequestExperiencePermissions",
        "description": "Asks the agent for permission to participate in the script's Experience.",
        "returnType": "",
        "param": [
            {
                "name": "agent",
                "description": "Key of the agent to request permissions from",
                "type": "key"
            },
            {
                "name": "name",
                "description": "Deprecated, no longer used",
                "type": "string"
            }
        ]
    },
    {
        "name": "llRequestInventoryData",
        "description": "Requests data about the item name in the prim's inventory. When data is available the dataserver event will be raised.\n\nReturns the handle (a key) that is used to identify the dataserver event when it is raised.",
        "returnType": "key",
        "param": [
            {
                "name": "name",
                "description": "an item in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llRequestPermissions",
        "description": "Ask agent for permissions to run certain classes of functions.",
        "returnType": "",
        "param": [
            {
                "name": "agent",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "permissions",
                "description": "Permission mask (bitfield containing the permissions to request).",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRequestSecureURL",
        "description": "Requests one HTTPS:// (SSL) url for use by this object. The http_request event is tiggered with result of the request. HTTPS-in uses port 12043.\n\nReturns a handle (a key) used for identifying the result of the request in the http_request event.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llRequestSimulatorData",
        "description": "Requests data about region. When data is available the dataserver event will be raised.\n\nReturns a handle (a key) for a dataserver event response.",
        "returnType": "key",
        "param": [
            {
                "name": "region",
                "description": "Case sensitive region name.",
                "type": "string"
            },
            {
                "name": "data",
                "description": "DATA_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRequestURL",
        "description": "Requests one HTTP:// url for use by this script. The http_request event is triggered with the result of the request.\n\nReturns a handle (a key) used for identifying the result of the request in the http_request event.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llRequestUserKey",
        "description": "Requests the Agent ID for the agent identified by name from the dataserver. The name given may be either the current name of an avatar or a historical name that has been used in the past. If no agent can be found with the supplied name this function returns the value NULL_KEY. ",
        "returnType": "key",
        "param": [
            {
                "name": "username",
                "description": "the username of the avatar to retrieve the UUID of.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llRequestUsername",
        "description": "Requests the Username of the agent identified by id. When the Username is available the dataserver event will be raised. The agent identified by id does not need to be in the same region or online at the time of the request.\n\nReturns a handle (a key) that is used to identify the dataserver event when it is raised.If id is not the UUID of an avatar, the dataserver event is not raised.",
        "returnType": "key",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID",
                "type": "key"
            }
        ]
    },
    {
        "name": "llResetAnimationOverride",
        "description": "Resets the animation override of the specified animation state (anim_state) to the corresponding default value.",
        "returnType": "",
        "param": [
            {
                "name": "anim_state",
                "description": "animation state to be reset",
                "type": "string"
            }
        ]
    },
    {
        "name": "llResetLandBanList",
        "description": "Removes all residents from the land ban list.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llResetLandPassList",
        "description": "Removes all residents from the land access/pass list.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llResetOtherScript",
        "description": "Resets script name.",
        "returnType": "",
        "param": [
            {
                "name": "name",
                "description": "a script in the inventory of the prim this script is in",
                "type": "string"
            }
        ]
    },
    {
        "name": "llResetScript",
        "description": "Resets the script.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llResetTime",
        "description": "Resets the script-time timer to zero.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llReturnObjectsByID",
        "description": "If the script is owned by an agent, PERMISSION_RETURN_OBJECTS may be granted by the owner.  If the script is owned by a group, this permission may be granted by an agent belonging to the group's \"Owners\" role.\n\nReturns an integer that is the number of objects successfully returned to their owners or an ERR_* flag.",
        "returnType": "integer",
        "param": [
            {
                "name": "objects",
                "description": "list of object uuids (keys)",
                "type": "list"
            }
        ]
    },
    {
        "name": "llReturnObjectsByOwner",
        "description": "If the script is owned by an agent, PERMISSION_RETURN_OBJECTS may be granted by the owner.  If the script is owned by a group, this permission may be granted by an agent belonging to the group's \"Owners\" role.\n\nReturns an integer that is the number of objects successfully returned to their owners or an ERR_* flag.",
        "returnType": "integer",
        "param": [
            {
                "name": "owner",
                "description": "avatar or group UUID",
                "type": "key"
            },
            {
                "name": "scope",
                "description": "OBJECT_RETURN_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRezAtRoot",
        "description": "Instantiate inventory object rotated to rot with its root at position, moving at velocity, using param as the start parameter",
        "returnType": "",
        "param": [
            {
                "name": "inventory",
                "description": "an object in the inventory of the prim this script is in",
                "type": "string"
            },
            {
                "name": "position",
                "description": "position in region coordinates to place the object",
                "type": "vector"
            },
            {
                "name": "velocity",
                "description": "initial velocity",
                "type": "vector"
            },
            {
                "name": "rot",
                "description": "initial rotation",
                "type": "rotation"
            },
            {
                "name": "param",
                "description": "on_rez event parameter and value returned by llGetStartParameter in the rezzed object (or by each of the items in a coalesced object).",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRezObject",
        "description": "Instantiate inventory object at pos with velocity vel and rotation rot with start parameter param",
        "returnType": "",
        "param": [
            {
                "name": "inventory",
                "description": "an object in the inventory of the prim this script is in",
                "type": "string"
            },
            {
                "name": "pos",
                "description": "position in region coordinates",
                "type": "vector"
            },
            {
                "name": "vel",
                "description": "velocity (max magnitude is approximately 200m/s)",
                "type": "vector"
            },
            {
                "name": "rot",
                "description": "rotation",
                "type": "rotation"
            },
            {
                "name": "param",
                "description": "on_rez event parameter and value returned by llGetStartParameter in the rezzed object (or by each of the items in a coalesced object).",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRot2Angle",
        "description": "Returns a float that is the rotation angle represented by rot",
        "returnType": "float",
        "param": [
            {
                "name": "rot",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llRot2Axis",
        "description": "Returns a vector the rotation axis represented by rot",
        "returnType": "vector",
        "param": [
            {
                "name": "rot",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llRot2Euler",
        "description": "Returns a vector that is the Euler representation (roll, pitch, yaw) of quat, with each component expressed in radians.",
        "returnType": "vector",
        "param": [
            {
                "name": "quat",
                "description": "Any valid rotation",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llRot2Fwd",
        "description": "Computes the orientation of the local x-axis relative to the parent (i.e. the root prim or the world).\n\nReturns a vector that is the forward vector defined by q, i.e. a unit vector pointing in the local positive X direction.",
        "returnType": "vector",
        "param": [
            {
                "name": "q",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llRot2Left",
        "description": "Computes the orientation of the local y-axis relative to the parent (i.e. relative to the root prim or the world).\n\nReturns a vector that is the left vector defined by q, i.e. a unit vector pointing in the local positive Y direction",
        "returnType": "vector",
        "param": [
            {
                "name": "q",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llRot2Up",
        "description": "Computes the orientation of the local z-axis relative to the parent (i.e. the root prim or the world).\n\nReturns a vector that is the up vector defined by q, i.e. a unit vector pointing in the positive Z direction",
        "returnType": "vector",
        "param": [
            {
                "name": "q",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llRotateTexture",
        "description": "Sets the texture rotation of the chosen face to angle.",
        "returnType": "",
        "param": [
            {
                "name": "angle",
                "description": "angle expressed in radians",
                "type": "float"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRotBetween",
        "description": "Returns a rotation that is the shortest rotation between the direction start and the direction end",
        "returnType": "rotation",
        "param": [
            {
                "name": "start",
                "description": "",
                "type": "vector"
            },
            {
                "name": "end",
                "description": "",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llRotLookAt",
        "description": "Causes an object to smoothly rotate to target_direction with strength resistance at damping force.",
        "returnType": "",
        "param": [
            {
                "name": "target_direction",
                "description": "",
                "type": "rotation"
            },
            {
                "name": "strength",
                "description": "",
                "type": "float"
            },
            {
                "name": "damping",
                "description": "seconds to critically damp in",
                "type": "float"
            }
        ]
    },
    {
        "name": "llRotTarget",
        "description": "This function is to have the script know when it has reached a rotation.\n\nIt registers a rot with a error that triggers at_rot_target and not_at_rot_target events continuously until unregistered.\n\nReturns a handle (an integer) to unregister the target with llRotTargetRemove",
        "returnType": "integer",
        "param": [
            {
                "name": "rot",
                "description": "target rotation",
                "type": "rotation"
            },
            {
                "name": "error",
                "description": "angle in radians, defines when rot has been reached",
                "type": "float"
            }
        ]
    },
    {
        "name": "llRotTargetRemove",
        "description": "Removes rotational target handle registered with llRotTarget",
        "returnType": "",
        "param": [
            {
                "name": "handle",
                "description": "handle to control at_rot_target and not_at_rot_target events",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llRound",
        "description": "Returns the integer that val is closest to.",
        "returnType": "integer",
        "param": [
            {
                "name": "val",
                "description": "Any valid float value",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSameGroup",
        "description": "Returns a boolean (an integer) that is TRUE if uuid and the prim the script is in are of the same group, otherwise FALSE.",
        "returnType": "integer",
        "param": [
            {
                "name": "uuid",
                "description": "group, avatar or prim UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llSay",
        "description": "Says the text supplied in string msg on channel supplied in integer channel.",
        "returnType": "",
        "param": [
            {
                "name": "channel",
                "description": "output chat channel, any integer value",
                "type": "integer"
            },
            {
                "name": "msg",
                "description": "message to be transmitted",
                "type": "string"
            }
        ]
    },
    {
        "name": "llScaleByFactor",
        "description": "Attempts to resize the entire object by scaling_factor, maintaining the size-position ratios of the prims.",
        "returnType": "integer",
        "param": [
            {
                "name": "scaling_factor",
                "description": "The multiplier to be used with the prim sizes and their local positions.",
                "type": "float"
            }
        ]
    },
    {
        "name": "llScaleTexture",
        "description": "Sets the texture u & v scales for the chosen face.",
        "returnType": "",
        "param": [
            {
                "name": "u",
                "description": "horizontal (x) scale in the interval [-100.0, 100.0]",
                "type": "float"
            },
            {
                "name": "v",
                "description": "vertical (y) scale in the interval [-100.0, 100.0]",
                "type": "float"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llScriptDanger",
        "description": "Returns a boolean (an integer) that is TRUE if pos is over public land, sandbox land, land that doesn't allow everyone to edit and build, or land that doesn't allow outside scripts.",
        "returnType": "integer",
        "param": [
            {
                "name": "pos",
                "description": "position in region coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llScriptProfiler",
        "description": "Enables or disables the scripts profiling state.",
        "returnType": "",
        "param": [
            {
                "name": "flags",
                "description": "PROFILE_* flags",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSendRemoteData",
        "description": "Send an XML-RPC request to dest through channel with payload of channel (in a string), integer idata and string sdata.\n\nReturns a key that is the message_id for the resulting remote_data events.",
        "returnType": "key",
        "param": [
            {
                "name": "channel",
                "description": "",
                "type": "key"
            },
            {
                "name": "dest",
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
        "name": "llSensor",
        "description": "Performs a single scan for name and id with type within radius meters and arc radians of forward vector.",
        "returnType": "",
        "param": [
            {
                "name": "name",
                "description": "object or avatar name!",
                "type": "string"
            },
            {
                "name": "id",
                "description": "group, avatar or object UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "type",
                "description": "mask (AGENT, AGENT_BY_LEGACY_NAME, AGENT_BY_USERNAME, ACTIVE, PASSIVE, and/or SCRIPTED)",
                "type": "integer"
            },
            {
                "name": "radius",
                "description": "distance in meters from center, [0.0, 96.0]",
                "type": "float"
            },
            {
                "name": "arc",
                "description": "the max angle between the object's local X-axis and detectable objects, [0.0, PI]",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSensorRemove",
        "description": "Removes the sensor setup by llSensorRepeat.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llSensorRepeat",
        "description": "Performs a scan for name and id with type within range meters and arc radians of forward vector and repeats every rate seconds. The first scan is not performed until rate seconds have passed.",
        "returnType": "",
        "param": [
            {
                "name": "name",
                "description": "Object or avatar name!",
                "type": "string"
            },
            {
                "name": "id",
                "description": "group, avatar or object UUID",
                "type": "key"
            },
            {
                "name": "type",
                "description": "mask (AGENT_BY_LEGACY_NAME, AGENT_BY_USERNAME, ACTIVE, PASSIVE, and/or SCRIPTED)",
                "type": "integer"
            },
            {
                "name": "radius",
                "description": "distance in meters from center, [0.0, 96.0]",
                "type": "float"
            },
            {
                "name": "arc",
                "description": "the max angle between the object's local X-axis and detectable objects, [0.0, PI]",
                "type": "float"
            },
            {
                "name": "rate",
                "description": "how often a scan is performed",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetAgentEnvironment",
        "description": "This function sets environment values for an individual agent in an experience.  The changes to the environment persist until the agent moves to a new region or llSetAgentEnvironment is called for an agent with an empty list. Passing an empty list in params will strip all environmental settings applied to this agent as part of the experience",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetAgentEnvironment",
        "param": [
            {
                "name": "agent_id",
                "description": "The key for an agent in the region.  The agent must be in the region and must be participating in the experience.",
                "type": "key"
            },
            {
                "name": "transition",
                "description": "The number of seconds over which to transition to the new settings.",
                "type": "float"
            },
            {
                "name": "params",
                "description": "A list of parameters to retrieve from the current environment. See table below for details.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetAlpha",
        "description": "Sets the alpha on face",
        "returnType": "",
        "param": [
            {
                "name": "alpha",
                "description": "from 0.0 (clear) to 1.0 (solid) (0.0 <= alpha <= 1.0)",
                "type": "float"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetAngularVelocity",
        "description": "Applies rotational velocity to object. It does the same job as llApplyRotationalImpulse but doesn't depend of the mass of object .",
        "returnType": "",
        "param": [
            {
                "name": "initial_omega",
                "description": "",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean,  if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetAnimationOverride",
        "description": "Set the animation (anim) that will play for the given animation state (anim_state).",
        "returnType": "",
        "param": [
            {
                "name": "anim_state",
                "description": "animation state to be overriden",
                "type": "string"
            },
            {
                "name": "anim",
                "description": "an animation in the inventory of the prim this script is in or the name of a built-in animation",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSetBuoyancy",
        "description": "Sets the buoyancy of the task or object. Requires physics to be enabled.",
        "returnType": "",
        "param": [
            {
                "name": "buoyancy",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetCameraAtOffset",
        "description": "Sets the point the camera is looking at to offset for avatars that sit on the object.",
        "returnType": "",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llSetCameraEyeOffset",
        "description": "Sets the camera eye offset for avatars that sit on the object.",
        "returnType": "",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llSetCameraParams",
        "description": "Sets multiple camera parameters at once.",
        "returnType": "",
        "param": [
            {
                "name": "rules",
                "description": "Format is [ rule1, data1, rule2, data2 . . . rulen, datan ]",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetClickAction",
        "description": "Sets the action performed when a prim is clicked upon (aka click action).",
        "returnType": "",
        "param": [
            {
                "name": "action",
                "description": "CLICK_ACTION_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetColor",
        "description": "Sets the color on face of the prim.",
        "returnType": "",
        "param": [
            {
                "name": "color",
                "description": "color in RGB <R, G, B> (<0.0, 0.0, 0.0> = black, <1.0, 1.0, 1.0> = white)",
                "type": "vector"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetContentType",
        "description": "Sets the  Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse.",
        "returnType": "",
        "param": [
            {
                "name": "request_id",
                "description": "a valid http_request() key",
                "type": "key"
            },
            {
                "name": "content_type",
                "description": "Media type to use with any following llHTTPResponse(request_id, ...)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetDamage",
        "description": "Sets the amount of damage that will be done when this object hits an avatar.",
        "returnType": "",
        "param": [
            {
                "name": "damage",
                "description": "range: 0.0 (no damage) ~ 100.0 (instant kill)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetEnvironment",
        "description": "This function overrides the environmental settings for a region or a parcel. The owner of the script must have permission to modify the environment on the parcel or be an estate manager to change the entire region.",
        "returnType": "Integer",
        "url": "https://wiki.secondlife.com/wiki/LlSetEnvironment",
        "param": [
            {
                "name": "position",
                "description": "The location on the region of the parcel to be changed. Use <-1, -1, z> for the entire region.  The z-component specifies which sky track to change, based on elevation.  Use z=-1 to set an override on the special 'all tracks' slot.",
                "type": "vector"
            },
            {
                "name": "params",
                "description": "A list of parameters to change for the parcel or region. Passing an empty list will remove any modifications from previous calls to llSetEnvironment.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetForce",
        "description": "Applies force to the object (if the script is physical)",
        "returnType": "",
        "param": [
            {
                "name": "force",
                "description": "directional force",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean,  if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetForceAndTorque",
        "description": "Sets the force and torque of object (if the script is physical)",
        "returnType": "",
        "param": [
            {
                "name": "force",
                "description": "directional force",
                "type": "vector"
            },
            {
                "name": "torque",
                "description": "torque force",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean,  if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetHoverHeight",
        "description": "Critically damps to a height above the ground (or water) in tau seconds.",
        "returnType": "",
        "param": [
            {
                "name": "height",
                "description": "Distance to hover above the ground (if negative, hovers below ground)",
                "type": "float"
            },
            {
                "name": "water",
                "description": "boolean,  if TRUE then hover above water too (or below if height is negative), if FALSE ignore water like it isn't there",
                "type": "integer"
            },
            {
                "name": "tau",
                "description": "seconds to critically damp in",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetKeyframedMotion",
        "description": "Specify a list of times, positions, and orientations to be followed by an object. The object will be smoothly moved between keyframes by the simulator. Collisions with other nonphysical or keyframed objects will be ignored (no script events will fire and collision processing will not occur). Collisions with physical objects will be computed and reported, but the keyframed object will be unaffected by those collisions. (The physical object will be affected, however.)",
        "returnType": "",
        "param": [
            {
                "name": "keyframes",
                "description": "Strided keyframe list of the form:vector position (optional via KFM_TRANSLATION and KFM_DATA)rotation orientation (optional via KFM_ROTATION and KFM_DATA)float timeEach keyframe is interpreted relative to the previous transform of the object. For example, consider the following list of keyframes: [<0, 0, 10>, ZERO_ROTATION, 5, <0, 0, 0>, ZERO_ROTATION, 5, <0, 0, -10>, ZERO_ROTATION, 5]. This would cause the object to move up 10m over the course of 5s. It would then remain at the location for 5s before moving down 10m over the course of another 5s.Time values must be 1/9s. or greater.Linear and angular velocities will be clamped to limits set by the simulator (values TBD).An empty list will terminate any keyframed animation currently playing.",
                "type": "list"
            },
            {
                "name": "options",
                "description": "modifiers and future options",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkAlpha",
        "description": "If a prim exists in the link set at link, set alpha on face of that prim.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "alpha",
                "description": "from 0.0 (clear) to 1.0 (solid) (0.0 <= alpha <= 1.0)",
                "type": "float"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetLinkCamera",
        "description": "Sets the camera eye offset, and the offset that camera is looking at, for avatars that sit on the linked prim.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "eye",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            },
            {
                "name": "at",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llSetLinkColor",
        "description": "If a prim exists in the link set at link, set color on face of that prim.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "color",
                "description": "color in RGB <R, G, B> (<0.0, 0.0, 0.0> = black, <1.0, 1.0, 1.0> = white)",
                "type": "vector"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetLinkMedia",
        "description": "Set the media params for a particular face on the linked prim(s) without a delay.\n\nReturns a status (an integer) that is a STATUS_* flag which details the success/failure of the operation(s).",
        "returnType": "integer",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "face",
                "description": "face number",
                "type": "integer"
            },
            {
                "name": "params",
                "description": "a set of name/value pairs (in no particular order)",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetPrimitiveParams",
        "description": "Sets the prim's parameters according to rules.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetLinkPrimitiveParams",
        "param": [
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkPrimitiveParams",
        "description": "Sets the prims parameters according to rules.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkPrimitiveParamsFast",
        "description": "Sets the prims parameters according to rules.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetPrimitiveParams",
        "description": "Sets the prim's parameters according to rules.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetLinkPrimitiveParamsFast",
        "param": [
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkPrimitiveParams",
        "description": "Sets the prims parameters according to rules.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetLinkPrimitiveParamsFast",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkPrimitiveParamsFast",
        "description": "Sets the prims parameters according to rules.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetLinkPrimitiveParamsFast",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkTexture",
        "description": "If a prim exists in the link set at link, set texture on face of that prim.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "texture",
                "description": "a texture in the inventory of the prim this script is in or a UUID of a texture",
                "type": "string"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetLinkTextureAnim",
        "description": "Animate the texture on the specified face/faces of the specified prim/prims by setting the texture scale and offset.  Identical to llSetTextureAnim except able to modify any prim in the link set.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag to effect",
                "type": "integer"
            },
            {
                "name": "mode",
                "description": "bit field of Mode flags",
                "type": "integer"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            },
            {
                "name": "sizex",
                "description": "horizontal frames (ignored for ROTATE and SCALE)",
                "type": "integer"
            },
            {
                "name": "sizey",
                "description": "vertical frames (ignored for ROTATE and SCALE)",
                "type": "integer"
            },
            {
                "name": "start",
                "description": "Start position/frame number (or radians for ROTATE)",
                "type": "float"
            },
            {
                "name": "length",
                "description": "number of frames to display (or radians for ROTATE)",
                "type": "float"
            },
            {
                "name": "rate",
                "description": "Frames per second, or radians per second when ROTATE is set, or UV coordinates when SMOOTH is set (must not be zero)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetLocalRot",
        "description": "Sets the rotation of a child prim relative to the root prim",
        "returnType": "",
        "param": [
            {
                "name": "rot",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llSetMemoryLimit",
        "description": "Request limit bytes to be reserved for this script.\n\nReturns the boolean (an integer) TRUE if the memory limit was successfully set (or FALSE if not).",
        "returnType": "integer",
        "param": [
            {
                "name": "limit",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetObjectDesc",
        "description": "Sets the prims description",
        "returnType": "",
        "param": [
            {
                "name": "description",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSetObjectName",
        "description": "Sets the prim's name according to the name parameter.",
        "returnType": "",
        "param": [
            {
                "name": "name",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSetParcelMusicURL",
        "description": "Sets the streaming audio URL for the parcel object is on",
        "returnType": "",
        "param": [
            {
                "name": "url",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSetPayPrice",
        "description": "Suggest default amounts for the pay text field and pay buttons of the appearing dialog when someone chooses to pay this object.",
        "returnType": "",
        "param": [
            {
                "name": "price",
                "description": "PAY_* constant or positive value",
                "type": "integer"
            },
            {
                "name": "quick_pay_buttons",
                "description": "Four PAY_* constants and/or positive integer values",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetPhysicsMaterial",
        "description": "Used to set the physical characteristics of an object.",
        "returnType": "",
        "param": [
            {
                "name": "gravity_multiplier",
                "description": "range [-1.0, +28.0], default: 1.0",
                "type": "float"
            },
            {
                "name": "restitution",
                "description": "range [0.0, 1.0], default: [0.3, 0.9] [1]",
                "type": "float"
            },
            {
                "name": "friction",
                "description": "range [0.0, 255.0], default: [0.2, 0.9][1]",
                "type": "float"
            },
            {
                "name": "density",
                "description": "range [1.0, 22587.0] kg/m^3, default: 1000.0",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetPos",
        "description": "Moves the object or primitive towards pos without using physics.",
        "returnType": "",
        "param": [
            {
                "name": "pos",
                "description": "position in region or local coordinates depending upon the situation (see #Specification).",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llSetPrimitiveParams",
        "description": "Sets the prim's parameters according to rules.",
        "returnType": "",
        "param": [
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkPrimitiveParams",
        "description": "Sets the prims parameters according to rules.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetPrimitiveParams",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetLinkPrimitiveParamsFast",
        "description": "Sets the prims parameters according to rules.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetPrimitiveParams",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "rules",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetPrimMediaParams",
        "description": "Set the media params for a particular face.\n\nReturns a status (an integer) that is a STATUS_* flag which details the success/failure of the operation(s).",
        "returnType": "integer",
        "url": "https://wiki.secondlife.com/wiki/LlSetPrimMediaParams",
        "param": [
            {
                "name": "face",
                "description": "face number",
                "type": "integer"
            },
            {
                "name": "params",
                "description": "a set of name/value pairs (in no particular order)",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetRegionPos",
        "description": "Tries to move the entire object so that the root prim is within 0.1m of position.\n\nReturns an integer boolean, TRUE if the object is successfully placed within 0.1 m of position, FALSE otherwise. See #Specification for details.",
        "returnType": "integer",
        "param": [
            {
                "name": "position",
                "description": "position in region coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llSetRemoteScriptAccessPin",
        "description": "Allows a prim to have scripts remotely loaded via llRemoteLoadScriptPin when it is passed the correct pin and the prim is set mod.",
        "returnType": "",
        "param": [
            {
                "name": "pin",
                "description": "zero disables (ie llRemoteLoadScriptPin will fail), non-zero enables.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetRot",
        "description": "Sets the rotation of the prim to rot.",
        "returnType": "",
        "param": [
            {
                "name": "rot",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llSetScale",
        "description": "Sets the size of the prim according to size",
        "returnType": "",
        "param": [
            {
                "name": "size",
                "description": "",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llSetScriptState",
        "description": "Set the running state of the script name.",
        "returnType": "",
        "param": [
            {
                "name": "name",
                "description": "a script in the inventory of the prim this script is in",
                "type": "string"
            },
            {
                "name": "running",
                "description": "boolean,  if TRUE[1] the script will be enabled, if FALSE the script will be disabled",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetSitText",
        "description": "Displays text rather than the default \"Sit Here\" in the right-click menu.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetSitText",
        "param": [
            {
                "name": "text",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSetSoundQueueing",
        "description": "Set whether attached sounds wait for the current sound to finish. If queue is TRUE, queuing is enabled, if FALSE queuing is disabled. Sound queuing is disabled by default.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetSoundQueueing",
        "param": [
            {
                "name": "queue",
                "description": "boolean, sound queuing:  TRUE enables,  FALSE (default) disables",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llLinkSetSoundQueueing",
        "description": "Set whether attached sounds wait for the current sound to finish. If queue is TRUE, queuing is enabled, if FALSE queuing is disabled. Sound queuing is disabled by default.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlSetSoundQueueing",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "queue",
                "description": "boolean, sound queuing:  TRUE enables,  FALSE (default) disables",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetSoundRadius",
        "description": "Establishes a hard cut-off radius for audibility of scripted sounds (both attached and triggered).",
        "returnType": "",
        "param": [
            {
                "name": "radius",
                "description": "in meters",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLinkSetSoundRadius",
        "description": "Establishes a hard cut-off radius for audibility of scripted sounds (both attached and triggered).",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            },
            {
                "name": "radius",
                "description": "in metersin meters",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetStatus",
        "description": "Sets the object status attributes indicated in the status} mask to value",
        "returnType": "",
        "param": [
            {
                "name": "status",
                "description": "bit mask, STATUS_* flags",
                "type": "integer"
            },
            {
                "name": "value",
                "description": "boolean,   TRUE enables,  FALSE disables",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetText",
        "description": "Displays text that hovers over the prim with specific color and translucency (specified with alpha).",
        "returnType": "",
        "param": [
            {
                "name": "text",
                "description": "floating text to display",
                "type": "string"
            },
            {
                "name": "color",
                "description": "color in RGB <R, G, B> (<0.0, 0.0, 0.0> = black, <1.0, 1.0, 1.0> = white)",
                "type": "vector"
            },
            {
                "name": "alpha",
                "description": "from 0.0 (clear) to 1.0 (solid) (0.0 <= alpha <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetTexture",
        "description": "Sets the texture of this prim's face.",
        "returnType": "",
        "param": [
            {
                "name": "texture",
                "description": "a texture in the inventory of the prim this script is in or a UUID of a texture",
                "type": "string"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetTextureAnim",
        "description": "Animate the texture on the specified face/faces by setting the texture scale and offset.",
        "returnType": "",
        "param": [
            {
                "name": "mode",
                "description": "Mask of Mode flags",
                "type": "integer"
            },
            {
                "name": "face",
                "description": "face number or ALL_SIDES",
                "type": "integer"
            },
            {
                "name": "sizex",
                "description": "Horizontal frames (ignored for ROTATE and SCALE)",
                "type": "integer"
            },
            {
                "name": "sizey",
                "description": "Vertical frames (ignored for ROTATE and SCALE)",
                "type": "integer"
            },
            {
                "name": "start",
                "description": "Start position/frame number (or radians for ROTATE)",
                "type": "float"
            },
            {
                "name": "length",
                "description": "Number of frames to display (or radians for ROTATE)",
                "type": "float"
            },
            {
                "name": "rate",
                "description": "Frames per second, or radians per second when ROTATE is set, or UV coordinates when SMOOTH is set (must not be zero)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetTimerEvent",
        "description": "Cause the timer event to be triggered a maximum of once every sec seconds. Passing in 0.0 stops further timer events.",
        "returnType": "",
        "param": [
            {
                "name": "sec",
                "description": "Any positive non-zero value to enable, zero (0.0) to disable.",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetTorque",
        "description": "Sets the torque of object (if the script is physical)",
        "returnType": "",
        "param": [
            {
                "name": "torque",
                "description": "",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean,  if TRUE uses the local axis, if FALSE uses the region region axis",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetTouchText",
        "description": "Displays text rather than the default \"Touch\" in the right-click menu",
        "returnType": "",
        "param": [
            {
                "name": "text",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSetVehicleFlags",
        "description": "Enabled the specified vehicle flags",
        "returnType": "",
        "param": [
            {
                "name": "flags",
                "description": "mask of VEHICLE_FLAG_* flags",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetVehicleFloatParam",
        "description": "Sets the vehicle float parameter param to value.",
        "returnType": "",
        "param": [
            {
                "name": "param",
                "description": "VEHICLE_* flag",
                "type": "integer"
            },
            {
                "name": "value",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetVehicleRotationParam",
        "description": "Sets the vehicle rotation parameter param to rot.",
        "returnType": "",
        "param": [
            {
                "name": "param",
                "description": "VEHICLE_* flag",
                "type": "integer"
            },
            {
                "name": "rot",
                "description": "",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llSetVehicleType",
        "description": "Sets the vehicle type to one of the default types.",
        "returnType": "",
        "param": [
            {
                "name": "type",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetVehicleVectorParam",
        "description": "Sets the vehicle vector parameter param to vec.",
        "returnType": "",
        "param": [
            {
                "name": "param",
                "description": "VEHICLE_* flag",
                "type": "integer"
            },
            {
                "name": "vec",
                "description": "",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llSetVelocity",
        "description": "Applies velocity to object",
        "returnType": "",
        "param": [
            {
                "name": "velocity",
                "description": "",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSHA1String",
        "description": "Returns a string of 40 hex characters that is the  SHA-1 security hash of src.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSHA256String",
        "description": "Returns a string of 64 hex characters that is the  SHA-256 security hash of src.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llShout",
        "description": "Shouts the text supplied in string msg on channel supplied in integer channel.",
        "returnType": "",
        "param": [
            {
                "name": "channel",
                "description": "output chat channel, any integer value",
                "type": "integer"
            },
            {
                "name": "msg",
                "description": "message to be transmitted",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSignRSA",
        "description": "Returns a string that is the  Base64-encoded  RSA signature of msg when using hash algorithm algorithm and secret key private_key.  Can be paired with llVerifyRSA to pass verifiable messages.",
        "returnType": "string",
        "param": [
            {
                "name": "private_key",
                "description": "",
                "type": "string"
            },
            {
                "name": "msg",
                "description": "",
                "type": "string"
            },
            {
                "name": "algorithm",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llSin",
        "description": "Returns a float that is the sine of theta.",
        "returnType": "float",
        "param": [
            {
                "name": "theta",
                "description": "angle expressed in radians",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSitOnLink",
        "description": "The avatar specified by agent_id is forced to sit on the sit target of the prim indicated by the link parameter.  If the specified link is already occupied, the simulator searches down the chain of prims in the link set looking for an available sit target.\n\nReturns an Integer ",
        "returnType": "Integer",
        "param": [
            {
                "name": "agent_id",
                "description": "UUID of the avatar being forced to sit",
                "type": "key"
            },
            {
                "name": "link",
                "description": "Link number for the prim containing the desired sit target",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSitTarget",
        "description": "Set the sit location for the prim. The sit location is relative to the prim's position and rotation.",
        "returnType": "",
        "param": [
            {
                "name": "offset",
                "description": "Additional position for the sit target in local prim coordinates.",
                "type": "vector"
            },
            {
                "name": "rot",
                "description": "Additional rotation for the sit target relative to the prim rotation.",
                "type": "rotation"
            }
        ]
    },
    {
        "name": "llSleep",
        "description": "Puts the script to sleep for sec seconds. The script will not do anything during this time.",
        "returnType": "",
        "param": [
            {
                "name": "sec",
                "description": "seconds to sleep",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSqrt",
        "description": "Returns a float that is the square root of val.",
        "returnType": "float",
        "param": [
            {
                "name": "val",
                "description": "positive number (val >= 0.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llsRGB2Linear",
        "description": "Returns a vector Transforms a color specified in the sRGB colorspace to the linear RGB colorspace.",
        "returnType": "vector",
        "param": [
            {
                "name": "srgb",
                "description": "Color in the sRGB color space.",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llStartAnimation",
        "description": "Start animation anim for agent that granted PERMISSION_TRIGGER_ANIMATION if the permission has not been revoked.",
        "returnType": "",
        "param": [
            {
                "name": "anim",
                "description": "an item in the inventory of the prim this script is in or built-in animation",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStartObjectAnimation",
        "description": "Start animation for the current object.",
        "returnType": "",
        "param": [
            {
                "name": "anim",
                "description": "an item in the inventory of the prim this script is inname of an animation in the inventory of the current object",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStopAnimation",
        "description": "Stop animation anim for agent that granted PERMISSION_TRIGGER_ANIMATION if the permission has not been revoked.",
        "returnType": "",
        "param": [
            {
                "name": "anim",
                "description": "an animation in the inventory of the prim this script is in or a UUID of an animation or built in animation name",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStopObjectAnimation",
        "description": "Stop an animation for the current object.",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlStopObjectAnimation",
        "param": [
            {
                "name": "anim",
                "description": "name of an animation in the inventory of the current object, or an animation uuid",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStopHover",
        "description": "Stop hovering to a height",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStopLookAt",
        "description": "Stop causing object to point at a target",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStopMoveToTarget",
        "description": "Stops critically damped motion",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStopSound",
        "description": "Stops the attached sound(s) currently playing, if they were started by llLoopSound",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlStopSound",
        "param": []
    },
    {
        "name": "llLinkStopSound",
        "description": "Stops the attached sound(s) currently playing, if they were started by llLoopSound",
        "returnType": "",
        "url": "https://wiki.secondlife.com/wiki/LlStopSound",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag ",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llStringLength",
        "description": "Returns an integer that is the number of characters in str (not counting the null).",
        "returnType": "integer",
        "param": [
            {
                "name": "str",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStringToBase64",
        "description": "Returns the string Base64 representation of the str interpreted as an UTF-8 byte sequence",
        "returnType": "string",
        "param": [
            {
                "name": "str",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStringTrim",
        "description": "Returns a string that is src with leading and/or trailing white space (spaces, tabs, and line feeds) trimmed from it.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            },
            {
                "name": "type",
                "description": "STRING_TRIM* flag(s)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSubStringIndex",
        "description": "Returns an integer that is the index of the first instance of pattern in source.",
        "returnType": "integer",
        "param": [
            {
                "name": "source",
                "description": "what to search in (haystack)",
                "type": "string"
            },
            {
                "name": "pattern",
                "description": "what to search for (needle)",
                "type": "string"
            }
        ]
    },
    {
        "name": "llTakeControls",
        "description": "Allows for intercepting of keyboard and mouse clicks, specifically those specified by controls, from the agent the script has permissions for.",
        "returnType": "",
        "param": [
            {
                "name": "controls",
                "description": "bitfield of CONTROL_* flags",
                "type": "integer"
            },
            {
                "name": "accept",
                "description": "boolean, determines whether control events are generated",
                "type": "integer"
            },
            {
                "name": "pass_on",
                "description": "boolean, determines whether controls perform their normal functions",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llTan",
        "description": "Returns a float that is the tangent of theta.",
        "returnType": "float",
        "param": [
            {
                "name": "theta",
                "description": "angle expressed in radians",
                "type": "float"
            }
        ]
    },
    {
        "name": "llTarget",
        "description": "This function is to have the script know when it has reached a position.\n\nIt registers a position with a range that triggers at_target and not_at_target events continuously until unregistered.\n\nReturns a handle (an integer) to unregister the target with llTargetRemove.",
        "returnType": "integer",
        "param": [
            {
                "name": "position",
                "description": "position in region coordinates",
                "type": "vector"
            },
            {
                "name": "range",
                "description": "",
                "type": "float"
            }
        ]
    },
    {
        "name": "llTargetedEmail",
        "description": "Sends an email to the owner (selected by target) of an object with subject and message.",
        "returnType": "",
        "param": [
            {
                "name": "target",
                "description": "",
                "type": "integer"
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
            }
        ]
    },
    {
        "name": "llTargetOmega",
        "description": "Rotates the object/prim around axis at a rate of spinrate * llVecMag(axis) in radians per second with strength gain.",
        "returnType": "",
        "param": [
            {
                "name": "axis",
                "description": "arbitrary axis to rotate the object around",
                "type": "vector"
            },
            {
                "name": "spinrate",
                "description": "rate of rotation in radians per second",
                "type": "float"
            },
            {
                "name": "gain",
                "description": "also modulates the final spinrate and disables the rotation behavior if zero",
                "type": "float"
            }
        ]
    },
    {
        "name": "llTargetRemove",
        "description": "Removes positional target handle registered with llTarget",
        "returnType": "",
        "param": [
            {
                "name": "handle",
                "description": "handle to control at_target and not_at_target events",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llTeleportAgent",
        "description": "Teleports an agent to a landmark stored in the object's inventory.",
        "returnType": "",
        "param": [
            {
                "name": "agent",
                "description": "avatar  UUID that is in the same region (the avatar to teleport, must be the owner)",
                "type": "key"
            },
            {
                "name": "landmark",
                "description": "a landmark in the inventory of the prim this script is in or an empty string (for teleporting within the same region)",
                "type": "string"
            },
            {
                "name": "position",
                "description": "The position within the local region to teleport the avatar to if no landmark was provided.",
                "type": "vector"
            },
            {
                "name": "look_at",
                "description": "The position within the region that the avatar should be turned to face upon arrival.",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llTeleportAgentGlobalCoords",
        "description": "Teleports an agent to region_coordinates within a region specified by global_coordinates.",
        "returnType": "",
        "param": [
            {
                "name": "agent",
                "description": "avatar  UUID that is in the same region (the avatar to teleport, must be the owner)",
                "type": "key"
            },
            {
                "name": "global_coordinates",
                "description": "Global coordinates of the destination region. Can be retrieved by using llRequestSimulatorData(region_name, DATA_SIM_POS).",
                "type": "vector"
            },
            {
                "name": "region_coordinates",
                "description": "position in region coordinates where the avatar should land.",
                "type": "vector"
            },
            {
                "name": "look_at",
                "description": "direction the avatar should be facing on landing (east, west, etc).",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llTeleportAgentHome",
        "description": "Teleports avatar on owner's land to their home location without any warning, similar to a God Summons or dying.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llTextBox",
        "description": "Shows a dialog box on avatar's screen with the text message. It contains a text box for input, any text that is entered is said by avatar on channel when the \"Submit\" button is clicked.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            },
            {
                "name": "message",
                "description": "message to be displayed in the text box",
                "type": "string"
            },
            {
                "name": "channel",
                "description": "output chat channel, any integer value",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llToLower",
        "description": "Returns a string that is src with all lower-case letters",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llToUpper",
        "description": "Returns a string that is src with all upper-case characters.",
        "returnType": "string",
        "param": [
            {
                "name": "src",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llTransferLindenDollars",
        "description": "Transfer amount of L$ money from script owner to destination avatar.\n\nReturns a key used in a matching transaction_result event for the success or failure of the transfer. If the transaction is successful, this key will show in the transaction history.",
        "returnType": "key",
        "param": [
            {
                "name": "destination",
                "description": "avatar  UUID",
                "type": "key"
            },
            {
                "name": "amount",
                "description": "number of L$, must be greater than zero, (amount > 0)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llTriggerSound",
        "description": "Plays sound at volume, centered at but not attached to object.",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llTriggerSoundLimited",
        "description": "Plays sound at volume, centered at but not attached to the object, limited to the box defined by vectors top_north_east and bottom_south_west",
        "returnType": "",
        "param": [
            {
                "name": "sound",
                "description": "a sound in the inventory of the prim this script is in or a UUID of a sound",
                "type": "string"
            },
            {
                "name": "volume",
                "description": "between 0.0 (silent) and 1.0 (loud) (0.0 <= volume <= 1.0)",
                "type": "float"
            },
            {
                "name": "top_north_east",
                "description": "position in region coordinates",
                "type": "vector"
            },
            {
                "name": "bottom_south_west",
                "description": "position in region coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llUnescapeURL",
        "description": "Returns a string that is an unescaped/unencoded version of url, replacing \"%20\" with spaces etc.",
        "returnType": "string",
        "param": [
            {
                "name": "url",
                "description": "A (preferably valid and escaped URL) string.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llUnSit",
        "description": "The agent identified by id is forced to stand up if any of the following apply:",
        "returnType": "",
        "param": [
            {
                "name": "id",
                "description": "avatar  UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llUpdateCharacter",
        "description": "Updates settings for a character",
        "returnType": "",
        "param": [
            {
                "name": "options",
                "description": "Character configuration options.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llUpdateKeyValue",
        "description": "Start an asynchronous transaction to update a key-value pair associated with the script's Experience with the given key (k) and value (v).\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.",
        "returnType": "key",
        "param": [
            {
                "name": "k",
                "description": "The key for the key-value pair",
                "type": "string"
            },
            {
                "name": "v",
                "description": "The value for the key-value pair.  Maximum 2047 characters, or 4095 if using Mono.",
                "type": "string"
            },
            {
                "name": "checked",
                "description": "If TRUE the update will only happen if original_value matches the value in the key-value store.",
                "type": "integer"
            },
            {
                "name": "original_value",
                "description": "The value to compare with the current value in the key-value store.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llVecDist",
        "description": "Returns a float that is the undirected nonnegative distance between vec_a and vec_b.",
        "returnType": "float",
        "param": [
            {
                "name": "vec_a",
                "description": "Any valid vector",
                "type": "vector"
            },
            {
                "name": "vec_b",
                "description": "Any valid vector",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llVecMag",
        "description": "Returns a float that is the magnitude of the vector (the undirected non-negative distance from vec to <0.0, 0.0, 0.0>).",
        "returnType": "float",
        "param": [
            {
                "name": "vec",
                "description": "",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llVecNorm",
        "description": "Returns the vector that is vec normalized (a unit vector sharing the same direction as vec).",
        "returnType": "vector",
        "param": [
            {
                "name": "vec",
                "description": "Any valid vector",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llVerifyRSA",
        "description": "Returns an integer indicating whether the  RSA signature is valid for msg when using hash algorithm algorithm and public RSA key public_key.  Returns TRUE if the signature is verified, and FALSE otherwise.  Can be paired with llSignRSA to validate the authenticity of messages from other LSL scripts.",
        "returnType": "integer",
        "param": [
            {
                "name": "public_key",
                "description": "",
                "type": "string"
            },
            {
                "name": "msg",
                "description": "",
                "type": "string"
            },
            {
                "name": "signature",
                "description": "",
                "type": "string"
            },
            {
                "name": "algorithm",
                "description": "",
                "type": "string"
            }
        ]
    },
    {
        "name": "llVolumeDetect",
        "description": "If detect is TRUE, VolumeDetect is enabled, physical object and avatars can pass through the object.",
        "returnType": "",
        "param": [
            {
                "name": "detect",
                "description": "TRUE enables,  FALSE (default) disables",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llWanderWithin",
        "description": "Sets a character to wander about a central spot within a specified radius.",
        "returnType": "",
        "param": [
            {
                "name": "origin",
                "description": "Central point to wander about",
                "type": "vector"
            },
            {
                "name": "dist",
                "description": "Sets how far the character may wander from origin, along each world-aligned axis",
                "type": "vector"
            },
            {
                "name": "options",
                "description": "WANDER_* flags and their parameters",
                "type": "list"
            }
        ]
    },
    {
        "name": "llWater",
        "description": "Returns a float that is the water height below the prim's position + offset",
        "returnType": "float",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llWhisper",
        "description": "Whispers the text supplied in string msg on channel supplied in integer channel.",
        "returnType": "",
        "param": [
            {
                "name": "channel",
                "description": "output chat channel, any integer value",
                "type": "integer"
            },
            {
                "name": "msg",
                "description": "message to be transmitted",
                "type": "string"
            }
        ]
    },
    {
        "name": "llWind",
        "description": "Returns a vector that is the wind velocity at the prim's position + offset",
        "returnType": "vector",
        "param": [
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llXorBase64",
        "description": "Correctly performs an exclusive or on two Base64 strings.\n\nReturns a string that is a Base64 XOR of str1 and str2.",
        "returnType": "string",
        "param": [
            {
                "name": "str1",
                "description": "Base64 string",
                "type": "string"
            },
            {
                "name": "str2",
                "description": "Base64 string",
                "type": "string"
            }
        ]
    }
]);