import { Directory } from './directory';

export const Functions = new Directory([
    {
        "name": "llAbs",
        "description": "Returns an integer that is the positive version of val.\n\nThis function is similar to functions (e.g. abs) found in many other languages",
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
        "description": "Returns a float that is the arccosine in radians of val\n\nThe returned value is in the range [0.0, PI]",
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
                "description": "avatar UUID",
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
                "description": "avatar UUID",
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
        "name": "llAgentInExperience",
        "description": "Determines whether or not the specified agent is in the script's experience.\n\nReturns a boolean (an integer) that is TRUE if the agent is in the experience and the experience can run in the current region.",
        "returnType": "integer",
        "param": [
            {
                "name": "agent",
                "description": "avatar UUID that is in the same region to query.",
                "type": "key"
            }
        ]
    },
    {
        "name": "llAllowInventoryDrop",
        "description": "Allows for all users without modify permissions to add inventory items to a prim.\n\nTo actually do the dropping, you need to drag an item from your inventory and drop it onto the prim WHILE holding down your Ctrl key. If you've got everything right, then just before you release it, you will see the prim framed in red.\n\nOwnership of the dropped inventory item changes to the owner of the prim. Next owner permissions kick in on the item that was dropped in. Non-transfer items cannot be dropped into a prim owned by someone else.\n\nAn application might be a public \"suggestion box\" that you want to let people drop notecards into.",
        "returnType": "",
        "param": [
            {
                "name": "add",
                "description": "boolean, If TRUE it allows anyone, even if they don't have modify rights to a prim, regardless of whether they are the owner or not, to drop items into that prim, If FALSE (default) inventory dropping can still be done, but it is restricted only to people with modify permissions to that prim",
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
        "description": "Applies impulse to object\n\nInstantaneous impulse. llSetForce has continuous push. \"Instantaneous\" seems to mean a one second impulse.\n\nThis function actually expects momentum to be expressed in Lindograms * meters per second.\n\nSee below for an example script to accelerate an object to a specific velocity. (Alternately, use llSetVelocity)",
        "returnType": "",
        "param": [
            {
                "name": "momentum",
                "description": "",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean, if TRUE momentum is treated as a local directional vector, if FALSE momentum is treated as a region directional vector",
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
                "description": "boolean, if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAsin",
        "description": "Returns a float that is the arcsine in radians of val\n\nThe returned value is in the range [-PI_BY_TWO, PI_BY_TWO]",
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
        "description": "Returns a float that is the arctangent2 of y, x.\n\nSimilar to the arctangent(y/x) except it utilizes the signs of x & y to determine the quadrant and avoids division by zero.",
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
        "description": "Attaches the object to the avatar who has granted permission to the script. The object is taken into the users inventory and attached to attach_point.\n\nTo run this function the script must request the PERMISSION_ATTACH permission with llRequestPermissions and it must be granted by the owner.\nIf attach_point is zero, then the object attaches to the attach point it was most recently attached to.",
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
        "description": "Follows the same convention as llAttachToAvatar, with the exception that the object will not create new inventory for the user, and will disappear on detach or disconnect. Also, this function can be used on avatars other than the owner (if granted permission) in which case the ownership is changed to the new wearer.\n\nTo run this function the script must request the PERMISSION_ATTACH permission with llRequestPermissions.\nIt should be noted that when an object is attached temporarily, a user cannot 'take' or 'drop' the object that is attached to them.\n\nThe user does not have to be the owner of the object in advance; this function transfers ownership automatically (the usual permissions required to transfer objects apply).\nIf attach_point is zero, then the object attaches to the attach point it was most recently attached to.",
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
        "name": "llAvatarOnLinkSitTarget",
        "description": "Returns a key that is the UUID of the user seated on the prim.\n\nIf the prim lacks a sit target or there is no avatar sitting on the prim, then NULL_KEY is returned.",
        "returnType": "key",
        "param": [
            {
                "name": "link",
                "description": "Link number (1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llAvatarOnSitTarget",
        "description": "Returns a key that is the UUID of the user seated on the prim.\n\nIf the prim lacks a sit target or there is no avatar sitting on the prim, then NULL_KEY is returned.",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llAxes2Rot",
        "description": "Returns a rotation that is defined by the 3 coordinate axes\n\nAll three vectors must be mutually orthogonal unit vectors.",
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
        "description": "Returns a rotation that is a generated angle about axis\n\naxis need not be normalized, only the direction is important.\n\nangle need to be between the value 0<angle<PI (higher values than PI lead to 2*PI-angle), because a rotation is not really a rotation (it is more of a rigid motion/mirroring), the final destination is the rotation. (in other words: it doesn't matter wether you rotate left by 90 degrees or right by 270 degrees it will return the same rotation).",
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
        "description": "Returns a string that is the Base64 str decoded into a conventional string, interpreting the Base64-encoded bytes as UTF-8 character sequence.",
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
        "description": "Delinks all prims in the link set.\n\nTo run this function the script must request the PERMISSION_CHANGE_LINKS permission with llRequestPermissions and it must be granted by the owner.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llBreakLink",
        "description": "Delinks the prim with the given link number in a linked object set\n\nTo run this function the script must request the PERMISSION_CHANGE_LINKS permission with llRequestPermissions and it must be granted by the owner.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llCastRay",
        "description": "Cast a line from start to end and report collision data for intersections with objects.\n\nReturns a list of strided values on a successful hit, with an additional integer status_code at the end.\n\nEach stride consists of two mandatory values {key uuid, vector position} and optionally {integer link_number, vector normal}. (See RC_DATA_FLAGS for details.)\n\nA negative status_code is an error code, otherwise it is the number of hits (and strides) returned.\n\nExample return of successful raycast, using the default options:\n[key object_uuid, vector hit_position, integer status_code]\n\nIn the case of an error, or if the ray hits nothing, the resulting list only contains the status code:\n[integer status_code]",
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
        "description": "Construct a single character string from the supplied Unicode value.\n\nThis function returns a single character string generated from the character at the indicated UTF-32 codepoint.\nIf val is negative, the codepoint has no valid single-character UTF-16 representation such as a part of a surrogate pair, or is outside defined range, the Unicode replacement character \"�\" (0xFFFD) is returned.\nIf val is 0, an empty string is returned.",
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
        "description": "Resets all camera parameters to default values and turns off scripted camera control.\n\nTo run this function the script must request the PERMISSION_CONTROL_CAMERA permission with llRequestPermissions.",
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
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "name": "llCloud",
        "description": "Returns a float that is the cloud density at the prim position + offset\n\nOnly the x and y coordinates in offset are important, the z component is ignored.\nReturned values are in the range [0.0, 2.0]. Values above 1.0 indicate rain.",
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
        "name": "llCollisionFilter",
        "description": "Sets the collision filter, exclusively or inclusively.\n\nIf accept == TRUE, only accept collisions with objects name AND id (either is optional), otherwise with objects not name AND id\nIf name or id are blank they are not used to filter incoming messages (or you could say they match everything). If id is an invalid key or a null key, it is considered blank.",
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
                "description": "TRUE only process collisions that match, FALSE instead excludes matches",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llCollisionSound",
        "description": "Suppress default collision sounds, replace default impact sounds with impact_sound at the volume impact_volume\n\nIf impact_sound is an empty string then the collision sound is suppressed.\nIf impact_volume is set to zero the collision particles are suppressed.",
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
        "description": "Suppress default collision sprites, replace default impact sprite with impact_sprite\n\nTo suppress the collision sprite all together, just use an empty string as the value for impact_sprite",
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
        "name": "llComputeHash",
        "description": "Returns a string hex-encoded hash digest of message using cryptographic algorithm\n\nSupported values of algorithm are md5, md5_sha1, sha1, sha224, sha256, sha384, sha512.",
        "returnType": "string",
        "param": [
            {
                "name": "message",
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
        "description": "Creates a pathfinding entity, known as a \"character\", from the object containing the script. Required to activate use of pathfinding functions.\n\nBy default, the character's shape will be an upright capsule approximately the size of the linkset, adjustable via the options list. The linkset must use the land impact accounting system introduced with the mesh project.\nIf called on an existing character, all unspecified parameters other than character size will revert to their defaults (if not specified, character size will not change). This is STRONGLY preferred over calling llDeleteCharacter() followed by llCreateCharacter() as it is much, much less taxing on the server.",
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
        "description": "Start an asynchronous transaction to create a key-value pair associated with the script's Experience using the given key (k) and value (v).\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed.\n\nIf the key already exists the dataserver will return a failure along with the error XP_ERROR_STORAGE_EXCEPTION.\n\nAs of Jan 1, 2016 maximum bytes is 1011 for key and 4095 for value for both LSO and Mono scripts.\n\nFor this function to work, the script must be compiled into an Experience.",
        "returnType": "key",
        "param": [
            {
                "name": "k",
                "description": "The key for the key-value pair",
                "type": "string"
            },
            {
                "name": "v",
                "description": "The value for the key-value pair. Maximum 2047 characters, or 4095 if using Mono.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llCreateLink",
        "description": "Attempt to link the script's object with target.\n\nTo run this function the script must request the PERMISSION_CHANGE_LINKS permission with llRequestPermissions and it must be granted by the owner.\ntarget must be modifiable and have the same owner.\nThis object must also be modifiable.",
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
        "description": "This function takes a string of values separated by commas, and turns it into a list.\n\nReturns a list made by parsing src, a string of comma separated values.\n\nTo convert a list into a comma-separated string use llList2CSV.\nDo not confuse this function with the CSV format, it is not the CSV format.",
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
        "description": "Start an asynchronous transaction to delete a key-value pair associated with the script's Experience with the given key (k).Returns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.\n\nIf the key does not exist the dataserver will return a failure along with the error XP_ERROR_STORAGE_EXCEPTION.",
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
        "name": "llDeleteSubList",
        "description": "Returns a list that is a copy of src but with the slice from start to end removed.\n\nstart & end support negative indexes.\nWhile the function result is different than src, src is not modified, remember to use or store the result of this function.\nThe opposite function would be llListInsertList.",
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
        "description": "Returns a string that is the result of removing characters from src from start to end.\n\nstart & end support negative indexes.\nCharacters at positions start and end are removed.",
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
        "description": "Detach object from avatar.\n\nTo run this function the script must request the PERMISSION_ATTACH permission with llRequestPermissions and it must be granted by the owner.\n\nThe detached object is no longer present in the sim. There is no lsl equivilent of the \"Drop\" command that moves an attachment onto the ground. Use llRezObject if you need similar behavior",
        "returnType": "",
        "param": []
    },
    {
        "name": "llDetectedGrab",
        "description": "Returns a vector that is the grab offset of the user touching the object; only works in the touch event.\n\nnumber does not support negative indexes.\nReturns <0.0, 0.0, 0.0> if number is out of range or if called from an event other than the touch event.",
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
        "description": "Returns an integer that is TRUE if the detected object or agent has the same active group as the prim containing the script. Otherwise FALSE is returned.\n\nnumber does not support negative indexes.\nReturns FALSE if number is out of range.",
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
        "description": "Returns a key that is the UUID of the detected object or avatar number.\n\nnumber does not support negative indexes.\nReturns an empty key if number does not correspond to a valid sensed object or avatar.",
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
        "description": "Returns the link_number (an integer) of the triggered event. If not supported by the event, returns zero.\n\nnumber does not support negative indexes.\nFor touch and collision categories of events only.",
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
        "description": "Returns a string that is the name of the detected item.\n\nitem does not support negative indexes.\nReturns NULL_KEY if item is not valid.\nIf the item detected is an avatar then the legacy name is returned.",
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
        "description": "Returns the key (UUID) of the owner of the object.\n\nnumber does not support negative indexes.\nReturns an empty key if number does not relate to a valid sensed object",
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
        "description": "Returns a vector that is the position (in region coordinates) of detected object number.\n\nnumber does not support negative indexes.\nReturns ZERO_VECTOR if number is not valid sensed object.",
        "returnType": "vector",
        "param": [
            {
                "name": "number",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedRezzer",
        "description": "Returns a key that is the UUID of the object or avatar that rezzed the Detected object number.\n\nReturns an  if number does not correspond to a valid sensed object or avatar.",
        "returnType": "key",
        "param": [
            {
                "name": "number",
                "description": "",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llDetectedRot",
        "description": "Returns the rotation of detected object number.\n\nnumber does not support negative indexes.\nReturns <0.0, 0.0, 0.0, 1.0> if number is not valid sensed object.",
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
        "description": "Returns a vector that is the surface binormal (tangent to the surface, pointing along the positive T (V) direction of tangent space) where the touch event was triggered. Along with llDetectedTouchNormal, this information can be used to find the tangent space at the touch location.\n\nindex does not support negative indexes.\nFor the touch category of events only. The prim that was touched may not be the prim receiving the event, use llDetectedLinkNumber to check for this; likewise you can use llDetectedTouchFace to determine which face was touched.\nTo find the third tangent vector, cross this vector with the normal.",
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
        "description": "Returns an integer that is the index of the face the avatar clicked on.\n\nFor the Touch category of events only. The prim that was touched may not be the prim receiving the event, use llDetectedLinkNumber to check for this; likewise you can use llDetectedTouchFace to determine which face was touched.",
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
        "description": "Returns a vector that is the surface normal (perpendicular to the surface) where the touch event was triggered. Along with llDetectedTouchBinormal, this information can be used to find the tangent space at the touch location.\n\nFor the Touch category of events only. The prim that was touched may not be the prim receiving the event, use cross the binormal with this vector.",
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
        "description": "Returns the vector position where the object was touched in region coordinates, unless it is attached to the HUD, in which case it returns the position in screen space coordinates.\n\nindex does not support negative indexes.\nFor the touch category of events only. The prim that was touched may not be the prim receiving the event, use llDetectedLinkNumber to check for this; likewise you can use llDetectedTouchFace to determine which face was touched.",
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
        "description": "Returns a vector that is the surface coordinates for where the prim was touched. The x & y vector positions contain the horizontal (s) & vertical (t) face coordinates respectively (<s, t, 0.0>). Each component is usually in the interval [0.0, 1.0] with the origin in the bottom left corner. With some mesh objects, values of less than 0.0 and higher than 1.0 have been observed.\n\nTOUCH_INVALID_TEXCOORD is returned when the surface coordinates cannot be determined. See Caveats for further details.\n\nindex does not support negative indexes.\nFor the touch category of events only. The prim that was touched may not be the prim receiving the event, use llDetectedLinkNumber to check for this; likewise, you can use llDetectedTouchFace to determine which face was touched.",
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
        "description": "Returns a vector that is the texture coordinates for where the prim was touched. The x & y vector positions contain the horizontal (u) & vertical (v) texture coordinates respectively (<u, v, 0.0>). Like llDetectedTouchST, the interval of each component will be [0.0, 1.0] unless the texture repeats are set to a non-default value. Increasing or decreasing the texture repeats of the face will change this interval accordingly. Additionally, unlike with llDetectedTouchST, changing a texture's rotation will change the results of this function.\n\n is returned when the touch UV coordinates cannot be determined. See Caveats for further details.\n\nFor the Touch category of events only. The prim that was touched may not be the prim receiving the event, use llDetectedLinkNumber to check for this; likewise you can use llDetectedTouchFace to determine which face was touched.",
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
        "description": "Returns an integer mask that is the types of detected object or avatar.\n\nnumber does not support negative indexes.\nReturns zero if number is not valid sensed object or avatar.",
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
        "description": "Returns the vector velocity of detected object or avatar number.\n\nnumber does not support negative indexes.\nReturns <0.0, 0.0, 0.0> if number is not valid sensed object or avatar.",
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
        "description": "Shows a dialog box in the lower right corner of the avatar's screen (upper right in Viewer 1.x) with a message and choice buttons, as well as an ignore button. This has many uses ranging from simple message delivery to complex menu systems.\n\nWhen a button is pressed, the avatar says the text of the button label on channel.\nThe position where the chat is generated is where the root prim of the dialog generating object was when the dialog button was pressed.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
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
        "description": "Deletes the object. The object does not go to the owners Inventory:Trash.\n\nIf called in any prim in the link set the result will be the deletion of the entire object.\nTo remove a single prim from an object use llBreakLink first.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llDumpList2String",
        "description": "Returns a string that is the list src converted to a string with separator between the entries.\n\nUse llParseString2List or llParseStringKeepNulls to undo the process.\n\nUnlike llList2CSV, which dumps a list to a comma-separated formatted string with no choice over the separator, llDumpList2String gives you more control. This can be useful if you don't trust commas as a separator because you might be working with data supplied to the script by a user who uses, say, commas as part of a street address.",
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
        "description": "Checks to see whether the border hit by dir from pos is the edge of the world (has no neighboring simulator).\n\nReturns a boolean (an integer) value. FALSE indicating there is a simulator in the direction indicated.\n\nThe z component of dir is ignored.",
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
        "description": "Ejects avatar from the parcel.\n\nGenerally, the object owner must also be the land owner but there is an exception for land deeded to a group for group members with the \"Eject and freeze Residents on parcels\" ability. See #Ownership Limitations for details.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llEmail",
        "description": "Sends an email to address with subject and message.\n\nThe entire message (including the address, subject and other miscellaneous fields) can't be longer than 4096 bytes combined.",
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
        "description": "Returns a string that is the escaped/encoded version of url, replacing spaces with \"%20\" etc. The function will escape any character not in [a-zA-Z0-9] to \"%xx\" where \"xx\" is the hexadecimal value of the character in UTF-8 byte form.\n\nTo clarify, numbers and ASCII7 alphabetical characters are NOT escaped. If a character requires more then one byte in UTF-8 byte form then it returns multiple \"%xx\" sequences chained together.\n\nThis function is similar to functions (e.g. rawurlencode, encodeURIComponent) found in many other languages",
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
        "description": "Returns a rotation representation of the Euler Angles v.",
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
        "description": "Send a command to the pathing system.\n\nCurrently only supports stopping the current pathfinding operation or causing the character to jump.",
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
        "description": "Sets if a sitting avatar should be forced into mouselook when they sit on this prim.\n\nA sit target is not necessary for this function to work.",
        "returnType": "",
        "param": [
            {
                "name": "mouselook",
                "description": "boolean, if TRUE when an avatar sits on the prim, the avatar will be forced into mouselook mode, if FALSE (default) the avatar will keep their current camera mode.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llFrand",
        "description": "Returns a float that is pseudo random in the range [0.0, mag) or (mag, 0.0].\nThis means that the returned value can be any value in the range 0.0 to mag including 0.0, but not including the value of mag itself. The sign of mag matches the return.\n\nWhen converting the float to an integer, be sure to use an integer typecast (integer) and not one of the rounding functions (llRound, llFloor, llCeil). The integer typecast is the only method guaranteed not to skew the distribution of integer values.",
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
                "description": "avatar UUID that is in the same region",
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
                "description": "avatar UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetAgentList",
        "description": "Requests a list of agents currently in the region, limited by the scope parameter.\n\nReturns a list [key id0, key id1, ..., key idn] or [string error_msg] - returns avatar keys for all agents in the region limited to the area(s) specified by scope",
        "returnType": "list",
        "param": [
            {
                "name": "scope",
                "description": "AGENT_LIST_* flag specifies the selection scope\n* AGENT_LIST_PARCEL - returns only agents on the same parcel where the script is running.\n* AGENT_LIST_PARCEL_OWNER - returns only agents on any parcel in the region where the parcel owner is the same as the owner of the parcel under the scripted object.\n* AGENT_LIST_REGION - returns any/all agents in the region.",
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
        "description": "Returns a vector that is an estimated size of the requested avatar.\n\nZERO_VECTOR is returned if avatar is not in the region or if it is not an avatar.",
        "returnType": "vector",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetAlpha",
        "description": "Returns a float that is the Blinn-Phong alpha of face.\n\nIf face is ALL_SIDES then the function returns the sum of alpha of all the faces on the prim, range [0, sides].\nOtherwise the return is in the range [0, 1], with 0.0 being fully transparent and 1.0 being fully solid.",
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
        "description": "Returns a string that is the name of the currently playing locomotion animation for avatar id. See the table below.\n\nllGetAgentInfo provides information on some animation states not covered by this function (typing, away, busy). llGetAnimationList provides more detailed information about the running animations, but may not reflect avatar state as accurately as llGetAnimation.",
        "returnType": "string",
        "param": [
            {
                "name": "id",
                "description": "avatar UUID that is in the same region",
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
                "description": "avatar UUID that is in the same region",
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
        "description": "Returns a list of object keys corresponding to public attachments worn by an avatar.\n\nBy design HUD attachment keys are not reported by this function.\n\nIf avatar is a child agent, [\"NOT ON REGION\"] is returned.\nIf avatar is not a main agent and not a child agent or not an agent at all, [\"NOT FOUND\"] is returned.",
        "returnType": "list",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetBoundingBox",
        "description": "Returns a list that is the bounding box of object relative to its root prim, in local coordinates.\nFormat: [ (vector) min_corner, (vector) max_corner ]\n\nThe bounding box is for the entire link set, not just the requested prim.\nReturns an empty list ([]) if object is not found.",
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
        "name": "llGetCameraAspect",
        "description": "Returns a float value for the current camera's aspect ratio (e.g. width/height) of the agent for which the task has permissions.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetCameraFOV",
        "description": "Returns a float value for the current camera's field of view (FOV), in radians, of the agent for which the task has permissions.",
        "returnType": "float",
        "param": []
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
        "description": "Returns the vector position of the object's center of mass in region coordinates.\n\nIf called from a child prim, the child's center of mass is returned instead (but still in region coordinates).",
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
        "description": "Returns a vector that is the Blinn-Phong color on face.",
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
        "description": "Returns a string that is the current date in the UTC time zone in the format \"YYYY-MM-DD\".\n\nIf you wish to know the time as well use: llGetTimestamp which uses the format",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetDayLength",
        "description": "Return the number of seconds in the day cycle applied to the current parcel. llGetDayLength returns the number of seconds for the current parcel, llGetRegionDayLength is the number of seconds in the day cycle applied to the entire region.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetDayOffset",
        "description": "Return the number of seconds added to the current time before calculating the current environmental time for the parcel. llGetDayOffset returns the value for the current parcel, llGetRegionDayOffset produces the same value for the entire region.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetDisplayName",
        "description": "Returns a string that is the non-unique display name of the avatar specified by id.\n\nid must specify a valid avatar key, present in or otherwise known to the sim in which the script is running, otherwise an empty string is returned. This function will still return a valid display name if the avatar is a child agent of the sim (i.e., in an adjacent sim, but presently able to see into the one the script is in), or for a short period after the avatar leaves the sim (specifically, when the client completely disconnects from the sim, either as a main or child agent).",
        "returnType": "string",
        "param": [
            {
                "name": "id",
                "description": "avatar UUID that is in the same region or is otherwise known to the region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetEnv",
        "description": "Returns a string with the requested data about the region.\n\nNote that the value returned is a string, you may need to cast it to an integer for use in calculations.",
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
        "name": "llGetEnergy",
        "description": "Returns a float that is how much energy is in the object as a percentage of maximum",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetEnvironment",
        "description": "Returns a list containing the current environment values for the parcel or region as a list of attributes. Takes a list of attributes to retrieve in params and returns them in the order requested.\n\nIf an unknown rule is encountered in the parameter list an error is sent to the debug channel.",
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
        "description": "Returns a list of details about the experience. This list has 6 components: [string experience_name, key owner_id, key experience_id, integer state, string state_message, key group_id]\n\nIf experience_id is NULL_KEY, then information about the script's experience is returned. In this situation, if the script isn't associated with an experience, an empty list is returned.",
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
        "description": "Returns an integer that is the number of available URLs. If attached, return the URLs remaining for the owner. Otherwise, return the available URLs for the region.",
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
        "description": "Returns a float that is the time in seconds since midnight GMT. Value appears to be truncated to the second.\n\nFor SL time, which is the same as California time, use llGetWallclock",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetHealth",
        "description": "Returns the current health of an avatar.",
        "returnType": "float",
        "param": [
            {
                "name": "agent_id",
                "description": "The ID of an agent in the region.",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetHTTPHeader",
        "description": "Returns a string that is the value for header for request_id.\n\nReturns an empty string if the header is not found, if the request_id is not a valid key received through the http_request event, or if the headers can no longer be accessed. Headers can only be accessed before llHTTPResponse is called and with-in the first 30&nbsp;seconds after the http_request event is queued.",
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
        "description": "Returns a string with the timestamp that the item was added to the prim's inventory.\n\nThe time is in the UTC time zone in the format \"YYYY-MM-DDThh:mm:ssZ\"\n\nAppears to be accurate to seconds.",
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
        "name": "llGetInventoryDesc",
        "description": "Returns a string with the description of the inventory item.",
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
        "name": "llGetInventoryKey",
        "description": "Returns a key that is the UUID of the inventory name\n\nIf name is not copy, mod, trans then the return is NULL_KEY.\nUse llGetInventoryType instead of this function to verify the existence of inventory.",
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
        "description": "Returns a string that is the name of the inventory item number of type. Returns an empty string if no item of the specified type is found in the prim's inventory (or there are less than or equal to number items of the type).\n\nnumber does not support negative indexes.\nInventory items are sorted in alphabetical order (not chronological order).",
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
        "description": "Returns an integer that is the type of the inventory item name\n\nIf name does not exist, INVENTORY_NONE is returned (no errors or messages are generated), making this function ideal for testing the existence of a certain item in inventory.",
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
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetLinkMedia",
        "description": "Get the media params for a particular face on a linked prim, given the desired list of named params.\n\nReturns a parameter list (a list) of values in the order requested.\n\nReturns an empty list if no media exists on the face(s).",
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
        "description": "Returns an integer that is the link number of the prim containing the script.\n\n0 means the prim is not linked, 1 the prim is the root, 2 the prim is the first child, etc. Links are numbered in the reverse order in which they were linked -- if you select a box, a sphere and a cylinder in that order, then link them, the cylinder is 1, the sphere is 2 and the box is 3. The last selected prim has the lowest link number.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetLinkNumberOfSides",
        "description": "Returns an integer that is the number of faces (or sides) of the prim link.\n\nSee Face for more information about faces and the conditions that control the number of faces a prim will have.",
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
        "name": "llGetLinkPrimitiveParams",
        "description": "Returns attribute values (a list) for the attributes requested in the params list.\n\nPRIM_* flags can be broken into three categories, face flags, prim flags, and object flags.\n\n* Supplying a prim or object flag will return that flag's attributes.\n* Face flags require the user to also supply a side parameter.",
        "returnType": "list",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag to get the parameters of",
                "type": "integer"
            },
            {
                "name": "params",
                "description": "PRIM_* flags",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetLinkSitFlags",
        "description": "Returns the current flags on the link's sittarget.",
        "returnType": "integer",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag The link ID",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetListEntryType",
        "description": "Returns the type (an integer) of the entry at index in src.\n\nindex supports negative indexes.\n\nIf index describes a location not in src then TYPE_INVALID is returned.",
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
        "description": "Returns a vector that is the position relative (local) to the root.\n\nIf called from the root prim it returns the position in the region unless it is attached to which it returns the position relative to the attach point.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetLocalRot",
        "description": "Returns the rotation of the prim relative to the root.\n\nIf called from the root prim, it returns the objects rotation.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetMass",
        "description": "Returns a float that is the mass of object (in lindograms) that script is attached to.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetMassMKS",
        "description": "Returns a float that is the mass (in Kilograms) of object that script is attached to. Functionally identical to llGetMass except for the unit used in the return value.\n\nMKS as used in the name of this function is likely a reference to the MKS system of units (Meter, Kilogram, Second), which form the base of SI units (with some minor differences).",
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
        "description": "Returns a float that is the smallest scaling factor that can be used with llScaleByFactor to resize the object. This minimum is determined by the prim scale limits.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetMoonDirection",
        "description": "Returns a normalized vector to the current moon position at the location of object containing the script. llGetMoonDirection is the vector to the parcel's moon, llGetRegionMoonDirection is the vector to region's moon. If there is no custom environment set for the current parcel llGetMoonDirection returns the direction to the region's moon. These functions are altitude aware.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetMoonRotation",
        "description": "Return the rotation applied to the moon for the parcel at the location of the object containing the script. These function are altitude aware and so will pick up the moon for their current track. llGetRegionMoonRotation returns the rotation applied at the region level, llGetMoonRotation does the same for the parcel. If there is no custom environment applied to parcel llGetMoonRotation returns the same value as llGetRegionMoonRotation.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetNextEmail",
        "description": "Get the next queued email that comes from address, with specified subject.\n\nIf address or subject an empty string, then that parameter will be treated as a wildcard.",
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
        "description": "Requests the line line of the notecard name from the dataserver.\n\nReturns the handle (a key) for a dataserver event response.\n\nline does not support negative indexes.\nIf line is past the end of the notecard EOF is returned by the dataserver.",
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
        "name": "llGetNotecardLineSync",
        "description": "Gets the line line of the notecard name from the dataserver immediately, provided it is cached, and without raising a dataserver event.\n\nline does not support negative indexes.\nReturns EOF if line is past the end of the notecard.",
        "returnType": "string",
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
        "description": "Returns an integer that is the number of faces (or sides) of the prim.\n\nSee Face for more information about faces and the conditions that control the number of faces a prim will have.",
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
        "description": "Returns a string containing the description of the prim the script is attached to.\n\nTo get the ''object's'' description (not the current prim's), use PRIM_DESC or OBJECT_DESC.",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetObjectDetails",
        "description": "Returns a list of the details for id, specifically those requested in params.\n\nAn empty list if id is not found.\nOBJECT_UNKNOWN_DETAIL is returned when passed an invalid integer parameter.",
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
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "description": "Returns a string that is the name of the ''prim'' the script is attached to.",
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
        "description": "Returns an integer that is the total number of prims in the object that contains prim.\n\nAvatars sitting on the object are not counted is not a prim.",
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
        "description": "Returns a list that is the parcel details specified in params (in the same order) for the parcel at pos.\n\nBoth x and y components of pos are clamped to the range [0.0, 256.0] component is ignored.",
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
        "description": "Returns a bit field (an integer) of parcel flags (PARCEL_FLAG_*) for the parcel that includes the point pos.\n\nBoth x and y components of pos are clamped to the range [0.0, 256.0], the z component is ignored.",
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
        "description": "Returns a string containing the parcel streaming audio URL.\n\nThe object owner must also be the land owner. If the land is deeded to a group the object will need to be deeded to the same group for this function to work.",
        "returnType": "string",
        "param": []
    },
    {
        "name": "llGetParcelPrimCount",
        "description": "Returns an integer that is the total land impact of objects on the parcel at pos of the given category",
        "returnType": "integer",
        "param": [
            {
                "name": "pos",
                "description": "position in region coordinates (z component is ignored)",
                "type": "vector"
            },
            {
                "name": "category",
                "description": "a PARCEL_COUNT_* flag",
                "type": "integer"
            },
            {
                "name": "sim_wide",
                "description": "boolean, TRUE searches parcels in the region with the same owner as the targeted parcel, FALSE searches only the targeted parcel",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llGetParcelPrimOwners",
        "description": "Returns a list of all residents and groups who own objects on the parcel at pos and with individual land impact used.\n\nThe list is formatted as [ key ownerKey1, integer agentImpact1, key ownerKey2, integer agentImpact2, ... ], and sorted by agent/group key with a maximum of 100 strides.\n\nRequires owner-like permissions for the parcel.",
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
        "description": "Returns the avatar (a key) of the avatar that last granted or declined permissions to the script.\n\nReturns NULL_KEY if permissions were neither granted nor declined (e.g., the permissions dialog was cancelled or otherwise ignored).",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llGetPhysicsMaterial",
        "description": "Used to get the physical characteristics of an object.\n\nReturns a list in the form [ float gravity_multiplier, float restitution, float friction, float density ]\n\nThe default values for friction and restitution depend upon the material type.",
        "returnType": "list",
        "param": []
    },
    {
        "name": "llGetPos",
        "description": "Returns the vector position of the task in region coordinates",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetPrimitiveParams",
        "description": "Returns attribute values (a list) for the attributes requested in the params list.\n\nPRIM_* flags can be broken into three categories, face flags, prim flags, and object flags.\n\n* Supplying a prim or object flag will return that flag's attributes.\n* Face flags require the user to also supply a side parameter.",
        "returnType": "list",
        "param": [
            {
                "name": "params",
                "description": "PRIM_* flags",
                "type": "list"
            }
        ]
    },
    {
        "name": "llGetPrimMediaParams",
        "description": "Get the media params for a particular face on an object, given the desired list of names.\n\nReturns a parameter list (a list) of values in the order requested.\n\nReturns an empty list if no media exists on the face.",
        "returnType": "list",
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
        "description": "Returns a vector in meters that is the global location of the south-west corner of the region the object is in. The z component is 0.0\n\nDivide the returned value by 256 to get the region offset.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetRegionDayLength",
        "description": "Return the number of seconds in the day cycle applied to the current region. llGetDayLength returns the number of seconds for the current parcel, llGetRegionDayLength is the number of seconds in the day cycle applied to the entire region.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetRegionDayOffset",
        "description": "Return the number of seconds added to the current time before calculating the current environmental time for the region. llGetDayOffset returns the value for the current parcel, llGetRegionDayOffset produces the same value for the entire region.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetRegionFlags",
        "description": "Returns an integer that is the region flags (REGION_FLAG_*) for the region the object is in.\n\nOnly a small number of flags are actually used; the rest (shown below in strike-through) are always zero.  In particular, it is not possible to detect the status of \"Allow Land Resell\", \"Allow Land Join/Divide\", or \"Block Land Show in Search\"; nor, obviously, it is possible for a script to detect that \"Disable Scripts\" has been set.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetRegionFPS",
        "description": "Returns a float that is the mean region frames per second.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetRegionMoonDirection",
        "description": "Returns a normalized vector to the current moon position at the location of object containing the script. llGetMoonDirection is the vector to the parcel's moon, llGetRegionMoonDirection is the vector to region's moon. If there is no custom environment set for the current parcel llGetMoonDirection returns the direction to the region's moon. These functions are altitude aware.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetRegionMoonRotation",
        "description": "Return the rotation applied to the moon for the region at the location of the object containing the script. These function are altitude aware and so will pick up the moon for their current track. llGetRegionMoonRotation returns the rotation applied at the region level, llGetMoonRotation does the same for the parcel. If there is no custom environment applied to parcel llGetMoonRotation returns the same value as llGetRegionMoonRotation.",
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
        "description": "Returns a normalized vector to the current sun position at the location of object containing the script. llGetSunDirection is the vector to the parcel's sun, llGetRegionSunDirection is the vector to region's sun. If there is no custom environment set for the current parcel llGetSunDirection returns the direction to the region's sun. These functions are altitude aware.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetRegionSunRotation",
        "description": "Return the rotation applied to the sun for the region at the location of the object containing the script. These functions are altitude aware and so will pick up the sun for their current track. llGetRegionSunRotation returns the rotation applied at the region level, llGetSunRotation does the same for the parcel. If there is no custom environment applied to parcel llGetSunRotation returns the same value as llGetRegionSunRotation.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetRegionTimeDilation",
        "description": "Returns a float that is the current time dilation, the value range is [0.0, 1.0], 0.0 (full dilation) and 1.0 (no dilation).\n\nIt is used as the ratio between the change of script time to that of real world time.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetRegionTimeOfDay",
        "description": "Returns a float that is the time in seconds with subsecond precision since Second Life midnight (per the region-scoped day cycle settings) or region up-time (time since when the region was brought online/rebooted); whichever is smaller. If the region is configured so the sun stays in a constant position, then the returned value is the region up-time.\n\nBy default (without custom environment settings), Second Life day cycles are 4 hours long (3 hours of light, 1 hour of dark). The sunrise and sunset time varies slowly.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetRenderMaterial",
        "description": "Returns a string that is the Material on face\n\nIf face is ALL_SIDES then the function returns the value for face zero.\nIf the Material is in the prim's inventory, the return value is the inventory name, otherwise the returned value is the Material UUID.",
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
        "description": "Returns an integer that is the script start/rez parameter.\n\n* If the script was loaded with llRemoteLoadScriptPin then that start parameter is returned.\n* If the containing object was rezzed by llRezObject or llRezAtRoot then the return is the on_rez parameter.\n* If the containing object was manually rezzed, by dragging from inventory, the start parameter is 0.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llGetStaticPath",
        "description": "Returns a list of position vectors indicating pathfinding waypoints between positions at start and end, for a character of a given radius. The waypoints this function returns are for the 'static' nav mesh, meaning that objects set to \"movable obstacle\" or \"movable phantom\" are ignored.\n\nThis function can be used from attachments and other non-character objects. It can also be used in any region, even if dynamic pathfinding is disabled.\n\nThe list also always contains an integer in the last element, which is a status code indicating the outcome of the path query:\n* If llGetStaticPath() finds a path, it will return waypoint vectors and will return a status code of 0, for success\n* If llGetStaticPath() cannot find a path for some reason, it only returns the status code, indicating the sort of error. The error codes correspond to the constants in path_update (e.g. PU_FAILURE_INVALID_START is returned if the start vector is not near the nav mesh)",
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
        "description": "Returns a normalized vector to the current sun position at the location of object containing the script. llGetSunDirection is the vector to the parcel's sun, llGetRegionSunDirection is the vector to region's sun. If there is no custom environment set for the current parcel llGetSunDirection returns the direction to the region's sun. These functions are altitude aware.",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetSunRotation",
        "description": "Return the rotation applied to the sun for the parcel at the location of the object containing the script. These function are altitude aware and so will pick up the sun for their current track. llGetRegionSunRotation returns the rotation applied at the region level, llGetSunRotation does the same for the parcel. If there is no custom environment applied to parcel llGetSunRotation returns the same value as llGetRegionSunRotation.",
        "returnType": "rotation",
        "param": []
    },
    {
        "name": "llGetTexture",
        "description": "Returns a string that is the Blinn-Phong diffuse texture on face\n\nIf the texture is in the prim's inventory, the return value is the inventory name, otherwise the returned value is the texture UUID.",
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
        "description": "Returns a float that is the time in seconds with subsecond precision since Second Life midnight (per the parcel-scoped day cycle settings) or region up-time (time since when the region was brought online/rebooted); whichever is smaller. If the parcel is configured so the sun stays in a constant position, then the returned value is the region up-time.\n\nBy default (without custom environment settings), Second Life day cycles are 4 hours long (3 hours of light, 1 hour of dark). The sunrise and sunset time varies slowly.",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGetTimestamp",
        "description": "Returns a string that is the current date and time in the UTC time zone in the format \"YYYY-MM-DDThh:mm:ss.ff..fZ\"\n\nAppears to be accurate to milliseconds.",
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
        "description": "Returns an integer that is the number of seconds elapsed since 00:00 hours, Jan 1, 1970 UTC from the system clock.",
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
        "description": "Returns a string that is the unique username of the avatar specified by id.\n\nid must specify a valid avatar key, present in or otherwise known to the sim in which the script is running, otherwise an empty string is returned. This function will still return a valid username if the avatar is a child agent of the sim (i.e., in an adjacent sim, but presently able to see into the one the script is in), or for a short period after the avatar leaves the sim (specifically, when the client completely disconnects from the sim, either as a main or child agent).",
        "returnType": "string",
        "param": [
            {
                "name": "id",
                "description": "avatar UUID that is in the same region or is otherwise known to the region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llGetVel",
        "description": "Returns a vector that is the velocity of the object.\n\nSpeed is the magnitude of the velocity. Speed is measured in meter per second.\nVelocity reported is relative to the global coordinate frame (the object rotation has no affect on this functions output).\nFor physic objects, velocity is the velocity of its center of mass llGetCenterOfMass. ( When the object has some torque and has not force, position of the object moves ( it turns ), but its center of mass is unchanged, so the velocity is null )",
        "returnType": "vector",
        "param": []
    },
    {
        "name": "llGetVisualParams",
        "description": "Returns a list of the details for agentid requested in params.\n\nAn empty list if agentid is not found.\nAn empty string, \"\", is returned in the place of any invalid or unknown visual parameter.",
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
        "description": "Returns a float that is the time in seconds since midnight Pacific time (PST/PDT), truncated to whole seconds. That is the same as the time of day in SLT expressed as seconds.\n\nFor GMT use llGetGMTclock",
        "returnType": "float",
        "param": []
    },
    {
        "name": "llGiveInventory",
        "description": "Give inventory to destination.\n\nIf destination is an object then it must be in the same region.\nIf destination is an avatar they do not have to be in the same region.",
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
                "description": "avatar UUID",
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
        "name": "llGodLikeRezObject",
        "description": "Rez directly off of UUID if owner has god-bit set.",
        "returnType": "",
        "param": [
            {
                "name": "inventory",
                "description": "",
                "type": "key"
            },
            {
                "name": "pos",
                "description": "position in region coordinates",
                "type": "vector"
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
        "description": "Returns a vector that is the ground normal from the current position + offset.",
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
        "description": "Critically damps to height if within height * 0.5 of ground or water level (which ever is higher).\n\nDo not use with vehicles.",
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
        "description": "Returns a 32bit hash for the provided string. Returns 0 if the input string is empty.",
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
        "description": "Returns a string that is the Base64-encoded HMAC hash of msg when using hash algorithm algorithm and secret key private_key.\n\nThis function supports md5, sha1, sha224, sha256, sha384, sha512 for algorithm.",
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
        "description": "Sends an HTTP request to the specified URL with the body of the request and parameters. When the response is received, a http_response event is raised.\n\nReturns a handle (a key) identifying the HTTP request made.",
        "returnType": "key",
        "param": [
            {
                "name": "url",
                "description": "A valid HTTP/HTTPS URL.",
                "type": "string"
            },
            {
                "name": "parameters",
                "description": "configuration parameters, specified as HTTP_* flag-value pairs\n[ parameter1, value1, parameter2, value2, . . . parameterN, valueN]",
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
        "description": "Responds to request_id with status and body.\n\nThe response need not be made inside the http_request event but if it does not happen in a timely fashion the request will time out (within 25 seconds).",
        "returnType": "",
        "param": [
            {
                "name": "request_id",
                "description": "A valid HTTP request key.",
                "type": "key"
            },
            {
                "name": "status",
                "description": "HTTP Status (200, 400, 404, etc)",
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
        "description": "Returns the string dst with src inserted starting at pos.\n\npos does not support negative indexes.\ni.e. unlike other somewhat similar string functions such as llGetSubString and llDeleteSubString, you cannot use -1 for the counting with this function. You may use instead the function provided a bit further below.",
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
        "description": "Sends an Instant Message specified in the string message to the user specified by user.\n\nTo send a message directly to an object, use llRegionSayTo.",
        "returnType": "",
        "param": [
            {
                "name": "user",
                "description": "avatar UUID",
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
        "name": "llIsFriend",
        "description": "Returns an integer that is TRUE if agent_id and the owner of the prim the script is in are friends, otherwise FALSE.",
        "returnType": "integer",
        "param": [
            {
                "name": "agent_id",
                "description": "",
                "type": "key"
            }
        ]
    },
    {
        "name": "llJson2List",
        "description": "This function takes a string representing JSON, and returns a list of the top level.\n\nReturns a list made by parsing src, a string representing json.\n\nTo convert a list into a json formatted string use llList2Json.",
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
        "description": "Gets the value indicated by specifiers from the json string.\n\nReturns a string made by parsing json, a string representing json and traversing as specified by specifiers.\n\nWhen the input is invalid or no result can be found this function returns JSON_INVALID. If the result is null the function returns JSON_NULL.",
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
        "description": "Returns, if successful, a new JSON text string which is json with the value indicated by the specifiers list set to value.\n\nIf unsuccessful (usually because of specifying an out of bounds array index) it returns JSON_INVALID.\n\nAn \"out of bounds array index\" is defined to be any Integer specifiers greater than the length of an existing array at that level within the Json text or greater than 0 (zero) at a level an array doesn't exist.\n\nA special specifiers, JSON_APPEND, is accepted which appends the value to the end of the array at the specifiers level. Care should be taken- if that level is not an array, the existing Value there will be overwritten and replaced with an array containing value at it's first (0) index.\n\nContrary to lists and strings, negative indexing of Json arrays is not supported.\n\nIf an existing \"Key\" is specifiers at that level, its Value will be overwritten by value unless value is the magic value JSON_DELETE. If a value does not exist at specifiers, a new Key:Value pair will be formed within the Json object.\n\nTo delete an existing value at specifiers, use JSON_DELETE as the value. Note it will not prune empty objects or arrays at higher levels.\n\nIf value is JSON_TRUE, JSON_FALSE or JSON_NULL, the Value set will be the bare words 'true', 'false' or 'null', respectively, at the specifiers location within json.\n\nspecifiers does not support negative indexes.",
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
        "description": "Returns a string that is the legacy name of the prim or avatar specified by id.\n\nid must specify a valid rezzed prim or avatar key, present in or otherwise known to the sim in which the script is running, otherwise an empty string is returned. In the case of an avatar, this function will still return a valid name if the avatar is a child agent of the sim (i.e., in an adjacent sim, but presently able to see into the one the script is in), or for a short period after the avatar leaves the sim (specifically, when the client completely disconnects from the sim, either as a main or child agent).\n\nKeys of inventory items will not work; in the case of these, use llGetInventoryName instead.",
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
        "description": "Start an asynchronous transaction to request a number of keys from the script's Experience.\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed.\n\nThis function will attempt to retrieve the number of keys requested but may return less if there are not enough to fulfill the full amount requested or if the list is too large. The length of the returned list is limited to 4097 characters (the success flag \"1\" and 4096 characters). The order keys are returned is not guaranteed but is stable between subsequent calls as long as no keys are added or removed.\nThe error XP_ERROR_KEY_NOT_FOUND is returned if there index given is greater than or equal to the number of keys.\n\nFor this function to work, the script must be compiled into an Experience.",
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
        "name": "llLinkAdjustSoundVolume",
        "description": "Adjusts volume of attached sound.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "name": "llLinkParticleSystem",
        "description": "A particle system defined by a list of rules is set for the prim(s) link.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "name": "llLinksetDataCountFound",
        "description": "The llLinksetDataCountFound function returns the number of keys in the linkset datastore that match the pattern supplied in the pattern.\n\nReturns an integer Count of the keys in the datastore that match the supplied pattern.",
        "returnType": "integer",
        "param": [
            {
                "name": "pattern",
                "description": "A regular expression describing which keys to return.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataCountKeys",
        "description": "The llLinksetDataCountKeys returns the number of unique keys that have been stored in the linkset's datastore.\n\nReturns an integer number of keys used in the linkset store.",
        "returnType": "integer",
        "param": []
    },
    {
        "name": "llLinksetDataDelete",
        "description": "Removes an unprotected name:value pair from the linkset's datastore. If the pair was created\n\nWhen this function successfully removes a name:value pair a linkset_data event is triggered in all scripts running in the linkset with an action of LINKSETDATA_DELETE and the name parameter set to the name that was removed. The value parameter in the event is set to an empty string.",
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
        "name": "llLinksetDataDeleteFound",
        "description": "The llLinksetDataDeleteFound function finds and attempts to delete all keys in the data store that match pattern. This function will delete protected key-value pairs only if the matching pass phrase is passed in the pass parameter. The function returns a list, the first entry in the list is the number of keys deleted, the second entry in the list is the number of keys that could not be deleted due to a non-matching pass phrase.\nIf this function successfully deletes any keys from the datastore it will trigger a linkset_data event with the type of LINKSET_DATA_MULTIDELETE, the key name will consist of a comma separated list of the key names removed from the datastore.\n\nReturns a list of the number of keys deleted or skipped.",
        "returnType": "list",
        "param": [
            {
                "name": "pattern",
                "description": "A regular expression describing which keys to delete.",
                "type": "string"
            },
            {
                "name": "pass",
                "description": "Optional pass phrase to delete protected keys.",
                "type": "string"
            }
        ]
    },
    {
        "name": "llLinksetDataDeleteProtected",
        "description": "The llLinksetDataDeleteProtected function erases a protected name:value pair from the linkset's datastore.\n\nReturns an integer success or failure code.",
        "returnType": "integer",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be deleted.",
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
        "description": "The llLinksetDataFindKeys function returns a list of up to count keys from the datastore that match pattern, starting at the one indicated by start. If count is less than 1, then all keys between start and the end which match pattern are returned. If count minus start exceeds the number of matching keys, the returned list will be shorter than count, down to a zero-length list if start equals or exceeds the number of matching keys. The list is ordered alphabetically.\n\nReturns a list of the keys in the datastore.",
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
        "description": "Reads an unprotected name:value pair from the linkset's datastore.\n\nReturns a string value corresponding to name\n\nIf name is not found return an empty string.",
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
        "description": "Reads a protected name:value pair from the datastore.\n\nReturns a string value corresponding to name\n\nIf name is not found return an empty string.",
        "returnType": "string",
        "param": [
            {
                "name": "name",
                "description": "The key of the linkset name:value pair to be read.",
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
        "description": "The llLinksetDataReset function erases all name:value pairs stored in the linkset's datastore. When this function is called the linkset_data event is triggered in all scripts running in the linkset with an action of LINKSETDATA_RESET.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llLinksetDataWrite",
        "description": "Creates or updates an unprotected name:value pair from the linkset's datastore.\n\nWhen these functions are called, the linkset_data event is triggered in all scripts running in the linkset with an action of LINKSETDATA_UPDATE, or LINKSETDATA_DELETE if the pair is deleted.\n\nThe linkset datastore can contain up to 131072 bytes (128 KiB) of data and has no impact on script memory usage aside from the functions and events used to interact with it. Every pair written to the datastore consumes a number of bytes in the datastore equal to the length of name plus the length of value, plus an additional 32 bytes if written using llLinksetDataWriteProtected.\n\nThis function returns 0 on success or an error code on failure.",
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
        "name": "llLinkSetSoundQueueing",
        "description": "Set whether attached sounds wait for the current sound to finish. If queue is TRUE, queuing is enabled, if FALSE queuing is disabled. Sound queuing is disabled by default.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
                "type": "integer"
            },
            {
                "name": "queue",
                "description": "boolean, sound queuing: TRUE enables, FALSE (default) disables",
                "type": "integer"
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
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
                "type": "integer"
            },
            {
                "name": "radius",
                "description": "in meters",
                "type": "float"
            }
        ]
    },
    {
        "name": "llLinkSitTarget",
        "description": "Set the sit location for the linked prim(s). The sit location is relative to the prim's position and rotation.\n\nIf offset == <0.0, 0.0, 0.0> then the sit target is removed.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "name": "llLinkStopSound",
        "description": "Stops the attached sound(s) currently playing, if they were started by llLoopSound",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llList2CSV",
        "description": "Returns a string of comma separated values taken in order from src.\n\nMore precisely the values are separated with a comma and a space (\", \").\n\nThis function's functionality is equivalent to llDumpList2String(src, \", \");\n\nThe result of this function is more or less the CSV format, but it does not conform in all its details.\n\nTo reverse the process use llCSV2List. But see the Caveat.",
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
        "description": "Returns a float that is at index in src.\n\nindex supports negative indexes.\n\nIf index describes a location not in src then zero is returned.\nIf the type of the element at index in src is not a float it is typecast to a float. If it cannot be typecast zero is returned.",
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
        "description": "Returns an integer that is at index in src.\n\nindex supports negative indexes.\n\nIf index describes a location not in src then zero is returned.\nIf the type of the element at index in src is not a integer it is typecast to a integer. If it cannot be typecast zero is returned.",
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
        "description": "This function takes a list and returns a JSON string of that list as either a json object or json array.\n\nReturns a string that is either values serialized as a JSON type, or if an error was encountered JSON_INVALID.\n\nTo convert a json formatted string into a list use llJson2List.",
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
        "description": "Returns a key that is at index in src.\n\nindex supports negative indexes.\n\nIf index describes a location not in src then null string is returned.\nIf the type of the element at index in src is not a key it is typecast to a key. If it cannot be typecast null string is returned.",
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
        "description": "Returns a list that is a slice of src from start to end.\n\nstart & end support negative indexes.",
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
        "name": "llList2ListSlice",
        "description": "Returns a list of the slice_index'th element of every stride in strided list whose index is a multiple of stride in the range start to end.\n\nThis function supports Strided Lists.\nThe index of the first entry in the list is 0\nThe index of the first entry in a slice is 0\nIf start, end, or slice_index are negative they are indexed from end of list. -1 is last element in the list. -list_length is the 1st element of the list.\nIf slice_index is negative it is counted from the end of its stride regardless of whether or not the stride exceeds the end of the list. e.g: -1 is the last element in a stride.\nIf start > end the range from start to end is treated as an exclusion range.",
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
            },
            {
                "name": "slice_index",
                "description": "",
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
        "description": "Returns a rotation that is at index in src.\n\nindex supports negative indexes.\n\nIf index describes a location not in src then ZERO_ROTATION is returned.\nIf the type of the element at index in src is not a rotation then ZERO_ROTATION is returned.\nHere is a workaround: (rotation)llList2String(src, index);",
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
        "description": "Sets a handle for msg on channel from name and id.\n\nReturns a handle (an integer) that can be used to deactivate or remove the listen.\n\nIf msg, name or id are blank (i.e. \"\") they are not used to filter incoming messages. If id is an invalid key or assigned the value NULL_KEY, it is considered blank as well.",
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
                "description": "TRUE (default) activates, FALSE deactivates",
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
        "description": "Returns the integer index of the first instance of test in src.\n\nIf test is not found in src, -1 is returned.\nThe index of the first entry in the list is 0\nIf test is found at the last index in src the positive index is returned (5th entry of 5 returns 4).",
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
        "name": "llListFindListNext",
        "description": "Returns the integer index of the nth instance of test in src.\n\nIf test is not found in src, -1 is returned.\nThe index of the first entry in the list is 0\nAn expansion of llListFindList which adds an instance parameter to select the nth match to test parameter.\nllListFindListNext(src, test, 0); is functionally equivalent to llListFindList(src, test);\nGiven a list like [ 'Resident', 'Alexia', 'Resident', 'Bob', 'Resident', 'Steve', 'Resident', 'Evil' ] using a test of [ 'Resident' ] and an instance of 0, 1, 2, 3 would return indices of 0, 2, 4, and 6 respectively. Selecting the 4th or greater instance will not be found and will return -1.\nReverse indexing is also supported. Using an instance of -1, -2, -3, -4 would respectively return 6, 4, 2, 0 And -5 and lower would again return -1\nIf test is found at the last index in src the positive index is returned (5th entry of 5 returns 4).",
        "returnType": "integer",
        "param": [
            {
                "name": "src",
                "description": "what to search in (haystack)",
                "type": "list"
            },
            {
                "name": "test",
                "description": "what to search for (needles)",
                "type": "list"
            },
            {
                "name": "instance",
                "description": "which instance (needle) to return",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llListFindStrided",
        "description": "Returns the integer index of the first instance of test in src matching conditions.\n\nIf test matching range and stride conditions is not found in src, -1 is returned.\nThe length of test may be equal to or less than stride in order to generate a match.\nThe index of the first entry in the list is 0\nIf test is found at the last index in src the positive index is returned (5th entry of 5 returns 4).\nIf start or end is negative, it is counted from the end list. The last element in the list is -1, the first is -list_length",
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
            },
            {
                "name": "start",
                "description": "Start of range to search",
                "type": "integer"
            },
            {
                "name": "end",
                "description": "End of range to search",
                "type": "integer"
            },
            {
                "name": "stride",
                "description": "Number of entries per stride within src",
                "type": "integer"
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
        "name": "llListSortStrided",
        "description": "llListSortStrided is llListSort with the added parameter of stride_index, adding the flexibility to sort by any item in the stride. These routines use the same underlying code and have the same computational complexity.\n\nReturns a list that is src sorted by the stride_index item in every stride.",
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
                "name": "stride_index",
                "description": "The index within the stride to sort by. stride_index is 0-indexed. The first element is 0, second 1, etc. An index of 0 is functionally identical to using llListSort.",
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
        "description": "Returns a float that is the result of performing statistical aggregate function operation on src.\n\nIf a list entry type is not a float or an integer it is silently ignored.",
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
        "description": "Shows dialog to avatar offering to load web page at url with message.\nIf user clicks yes, launches the page in their web browser, starting the browser if required.\n\nThe url is truncated to 255 characters and message is truncated to 254 characters.\nThe protocol for the url must be specified, currently only \"https://\" and \"http://\" are supported.\nThe URL should be RFC-1738 compliant with proper escapes.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
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
        "description": "Returns a float that is the natural logarithm of val.\nIf val <= 0 return 0.0 instead.\n\nTo get the base 10 logarithm use llLog10.",
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
        "description": "Returns a float that is the base 10 logarithm of val.\nIf val <= 0 return zero instead.\n\nTo get the natural logarithm use llLog.\nllLog10 should only be used where the base 10 log is needed, all other applications should use llLog instead.",
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
        "description": "Cause object to point its up axis (positive z) towards target, while keeping its forward axis (positive x) below the horizon.\n\nContinues to track target until llStopLookAt is called.\n\nTo change the position in the same manner use llMoveToTarget.",
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
        "name": "llMakeExplosion",
        "description": "Make a round explosion of particles",
        "returnType": "",
        "param": [
            {
                "name": "particles",
                "description": "",
                "type": "integer"
            },
            {
                "name": "scale",
                "description": "",
                "type": "float"
            },
            {
                "name": "vel",
                "description": "",
                "type": "float"
            },
            {
                "name": "lifetime",
                "description": "",
                "type": "float"
            },
            {
                "name": "arc",
                "description": "",
                "type": "float"
            },
            {
                "name": "texture",
                "description": "a texture in the inventory of the prim this script is in or a UUID of a texture",
                "type": "string"
            },
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates and is completely ignored.",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llMakeFire",
        "description": "Make fire like particles",
        "returnType": "",
        "param": [
            {
                "name": "particles",
                "description": "",
                "type": "integer"
            },
            {
                "name": "scale",
                "description": "",
                "type": "float"
            },
            {
                "name": "vel",
                "description": "",
                "type": "float"
            },
            {
                "name": "lifetime",
                "description": "",
                "type": "float"
            },
            {
                "name": "arc",
                "description": "",
                "type": "float"
            },
            {
                "name": "texture",
                "description": "a texture in the inventory of the prim this script is in or a UUID of a texture",
                "type": "string"
            },
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates and is completely ignored.",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llMakeFountain",
        "description": "Make a fountain of particles",
        "returnType": "",
        "param": [
            {
                "name": "particles",
                "description": "",
                "type": "integer"
            },
            {
                "name": "scale",
                "description": "",
                "type": "float"
            },
            {
                "name": "vel",
                "description": "",
                "type": "float"
            },
            {
                "name": "lifetime",
                "description": "",
                "type": "float"
            },
            {
                "name": "arc",
                "description": "",
                "type": "float"
            },
            {
                "name": "bounce",
                "description": "",
                "type": "integer"
            },
            {
                "name": "texture",
                "description": "a texture in the inventory of the prim this script is in or a UUID of a texture",
                "type": "string"
            },
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates and is completely ignored.",
                "type": "vector"
            },
            {
                "name": "bounce_offset",
                "description": "offset relative to the prim's position and expressed in local coordinates and is completely ignored",
                "type": "float"
            }
        ]
    },
    {
        "name": "llMakeSmoke",
        "description": "Make smoke like particles",
        "returnType": "",
        "param": [
            {
                "name": "particles",
                "description": "",
                "type": "integer"
            },
            {
                "name": "scale",
                "description": "",
                "type": "float"
            },
            {
                "name": "vel",
                "description": "",
                "type": "float"
            },
            {
                "name": "lifetime",
                "description": "",
                "type": "float"
            },
            {
                "name": "arc",
                "description": "",
                "type": "float"
            },
            {
                "name": "texture",
                "description": "a texture in the inventory of the prim this script is in or a UUID of a texture",
                "type": "string"
            },
            {
                "name": "offset",
                "description": "offset relative to the prim's position and expressed in local coordinates and is completely ignored.",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llManageEstateAccess",
        "description": "Use to add or remove agents from the estate's agent access or ban lists or groups from the estate's group access list.Returns a boolean (an integer) TRUE if the call was successful; FALSE if throttled, invalid action, invalid or null id or object owner is not allowed to manage the estate.\n\nOnly works for objects owned by the Estate Owner or an Estate Manager. By default, the object owner is notified of every change made using this function.  But if the owner grants PERMISSION_SILENT_ESTATE_MANAGEMENT to the script, the owner will not be notified.",
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
        "description": "Opens world map centered on simname with pos highlighted.\nOnly works for scripts attached to avatar, or during touch events.\n\n(NOTE: look_at currently does nothing)",
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
        "description": "Returns a string of 32 hex characters that is the MD5 checksum of src with a salt of \":\"+nonce.",
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
        "description": "The purpose of this function is to allow scripts in the same object to communicate. It triggers a link_message event with the same parameters num, str, and id in all scripts in the prim(s) described by link.\n\nYou can use id as a second string field[2]. The sizes of str and id are only limited by available script memory.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag, controls which prim(s) receive the link_message.",
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
        "description": "Set the minimum time between events being handled.\n\nDefaults and minimums vary by the event type, see LSL Delay.",
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
        "description": "Modify land with action on brush\n\nThe position of the prim is used to determine the input for various flags.",
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
        "description": "Critically damp to target in tau seconds (if the script is physical)\n\nTo stop the object from maintaining the target positions use llStopMoveToTarget\nTo change the rotation in the same manner use llLookAt or llRotLookAt.",
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
        "description": "Directs an object to travel to a defined position in the region or adjacent regions.\n\nAdjacent regions can be reached by extending the position vector into the nearby region.",
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
        "description": "Sets the texture u & v offsets for the chosen face.\n\nIf face is ALL_SIDES then the function works on all sides.",
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
        "name": "llOpenFloater",
        "description": "Returns an integer Error code, or 0 if no error.\n\nThis function may be called only from a Linden owned experience.",
        "returnType": "integer",
        "param": [
            {
                "name": "floater_name",
                "description": "Identifier of the viewer floater to open.",
                "type": "string"
            },
            {
                "name": "url",
                "description": "URL to open in the floater.",
                "type": "string"
            },
            {
                "name": "params",
                "description": "Options to apply to floater.",
                "type": "list"
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
        "description": "Calculate the ordinal value for a character in a string.\n\nindex supports negative indexes.\nThe returned value is the UTF-32 value of the character at the specified index. If index is outside the bounds of the string, this function returns 0.",
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
        "description": "Returns an integer boolean, TRUE if id is over land owned by the script owner, FALSE otherwise.\n\nOn group deeded land the object containing the script must be deeded to the same group. (It is not enough to set the script to the group.)",
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
        "description": "Returns a list that is src broken into a list of strings, discarding separators, keeping spacers, discards any null (empty string) values generated.\n\nIn most situations llParseStringKeepNulls should be used instead. Discarding null values is rarely desired.",
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
        "name": "llPassCollisions",
        "description": "Sets the pass-collisions prim attribute.\n\nWhether Collisions are passed to the root prim depends not only on which PASS_* flag is selected, but may also depend on if there is a script that in the prim that handles one of the collision events. For this reason most users will want to use PASS_ALWAYS or PASS_NEVER as they do not have this variable behavior.\n\nThe default value for this attribute is PASS_IF_NOT_HANDLED.",
        "returnType": "",
        "param": [
            {
                "name": "pass",
                "description": "PASS_* flag",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llPassTouches",
        "description": "Sets the pass-touches prim attribute.\n\nWhether Touches are passed to the root prim depends not only on which PASS_* flag is selected, but may also depend on if there is a script that in the prim that handles one of the touch events. For this reason most users will want to use PASS_ALWAYS or PASS_NEVER as they do not have this variable behavior.\n\nThe default value for this attribute is PASS_ALWAYS.",
        "returnType": "",
        "param": [
            {
                "name": "pass",
                "description": "PASS_* flag",
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
                "description": "A list of vectors for the character to travel through sequentially. The list must contain at least two entries.",
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
        "name": "llPointAt",
        "description": "Make agent that owns object point at pos",
        "returnType": "",
        "param": [
            {
                "name": "pos",
                "description": "",
                "type": "vector"
            }
        ],
        "flags": ["deprecated"]
    },
    {
        "name": "llPow",
        "description": "Returns a float that is base raised to the power exponent (base^exponent)\n\nReturns NaN when base is negative and exponent is not an integer (an imaginary result, (exponent != (integer)exponent) && (base < 0.0)).",
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
        "description": "Start an asynchronous transaction to read the value associated with the specified key (k) and the script's Experience.\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.\n\nIf the key does not exist the dataserver will return a failure along with the error XP_ERROR_KEY_NOT_FOUND.\n\nFor this function to work, the script must be compiled into an Experience.",
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
        "name": "llRefreshPrimURL",
        "description": "Reloads the web page shown on the sides of the object.\n\nThis functions currently does nothing.",
        "returnType": "",
        "param": [],
        "flags": ["deprecated"]
    },
    {
        "name": "llRegionSay",
        "description": "Says the string msg on channel number channel that can be heard anywhere in the region by a script listening on channel.\n\nRegardless of where the prim is, the message will not travel over region borders.",
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
        "description": "Says the text supplied in string msg on channel supplied in integer channel to the object or avatar specified by target",
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
        "name": "llReleaseCamera",
        "description": "This function is recognized by the compiler, but was never implemented in Second Life.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
                "type": "key"
            }
        ],
        "flags": ["deprecated"]
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
        "name": "llRemoteDataSetRegion",
        "description": "Used with XML-RPC. If an object using remote data channels changes regions, you must call this function to reregister the remote data channels.\n\nThis call is not needed if the prim does not change regions.",
        "returnType": "",
        "param": [],
        "flags": ["deprecated"]
    },
    {
        "name": "llRemoteLoadScript",
        "description": "Deprecated",
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
                "name": "running",
                "description": "",
                "type": "integer"
            },
            {
                "name": "start_param",
                "description": "",
                "type": "integer"
            }
        ],
        "flags": ["deprecated"]
    },
    {
        "name": "llRemoteLoadScriptPin",
        "description": "Copy script name into target and set to running with a start_param only if target's pin matches pin\n\nOnly works if the script owner can modify target.",
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
                "description": "boolean, if TRUE[1] the script is set as running, if FALSE the script is not set as running",
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
                "description": "avatar UUID",
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
                "description": "avatar UUID",
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
        "description": "The llReplaceAgentEnvironment function overrides the current region and parcel environment seen by an agent. The new environment persists until the agent crosses to a new region or this function is called with the NULL_KEY or empty string in the environment parameter for the particular agent, doing so will strip all environmental settings applied to this agent as part of the experience. This function must be executed as part of an experience.",
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
        "description": "The llReplaceEnvironment function replaces the environment in a parcel or a region. Either for a single elevation track or the entire environment. The owner of the script must have permission to edit the environment on the destination parcel, or be an estate manage in the case of an entire region. In most cases errors are reported as a return value from the function (see table below). However, issues with the environment assets may be reported in the debug chat.",
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
        "description": "Returns a string that is the result of replacing the first count matching instances pattern in src with replacement_pattern.\n\nIf count = 0, all matching substrings are replaced. If count > 0, substrings are replaced starting from the left/beginning of src. If count < 0, substrings are replaced starting from the right/end of src.",
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
                "description": "avatar UUID",
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
                "description": "avatar UUID",
                "type": "key"
            }
        ]
    },
    {
        "name": "llRequestExperiencePermissions",
        "description": "Asks the agent for permission to participate in the script's Experience.\n\nThis request is similar to llRequestPermissions with all the following permissions: PERMISSION_TAKE_CONTROLS, PERMISSION_TRIGGER_ANIMATION, PERMISSION_ATTACH, PERMISSION_TRACK_CAMERA, PERMISSION_CONTROL_CAMERA and PERMISSION_TELEPORT. However, unlike llRequestPermissions, the decision to allow or block the request is persistent and applies to all scripts using the experience grid-wide.\n\nSubsequent calls to llRequestExperiencePermissions from scripts in the experience will receive the same response automatically with no user interaction.\n\nEither experience_permissions or experience_permissions_denied will be generated in response to this call. If no response is given by the agent, the request will time out after at least 5 minutes. Multiple requests by the same script can be made during this time out though the script can only have permission for one agent at a time.\n\nAgents in god mode will always see the permission dialog even if the experience has been previously approved.\n\nOutstanding permission requests will be lost if the script is de-rezzed, moved to another region, or reset.\n\nFor this function to work, the script must be compiled into an Experience.",
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
        "description": "Ask agent for permissions to run certain classes of functions.\n\nScript execution continues without waiting for a response. When a response is given, a run_time_permissions event is put in the event queue.",
        "returnType": "",
        "param": [
            {
                "name": "agent",
                "description": "avatar UUID that is in the same region",
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
        "description": "Requests one HTTP:// URL for use by this script. The http_request event is triggered with the result of the request.\n\nReturns a handle (a key) used for identifying the result of the request in the http_request event",
        "returnType": "key",
        "param": []
    },
    {
        "name": "llRequestUserKey",
        "description": "Requests the Agent ID for the agent identified by name from the dataserver. The name given may be either the current name of an avatar or a historical name that has been used in the past. If no agent can be found with the supplied name this function returns the value NULL_KEY.\n\nReturns a handle (a key) that can be used to identify the request when the dataserver event is raised.\n\nThe agent being searched for with this function does not need to be signed on to Second Life.",
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
        "description": "Requests the Username of the agent identified by id. When the Username is available the dataserver event will be raised. The agent identified by id does not need to be in the same region or online at the time of the request.Returns a handle (a key) that is used to identify the dataserver event when it is raised.\nIf id is not the UUID of an avatar, the dataserver event is not raised.\n\nIf the name has been changed some time in the past, this provides only the current name.",
        "returnType": "key",
        "param": [
            {
                "name": "id",
                "description": "avatar UUID",
                "type": "key"
            }
        ]
    },
    {
        "name": "llResetAnimationOverride",
        "description": "Resets the animation override of the specified animation state (anim_state) to the corresponding default value.\n\nTo run this function the script must request the PERMISSION_OVERRIDE_ANIMATIONS permission with llRequestPermissions.\nIf anim_state equals \"ALL\", all animation states are reset.",
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
        "description": "Resets script name.\n\nOn script reset...\n* The current event/function is exited without further execution or return.\n* All global variables are set to their defaults\n* The event queue is cleared, and recurring events are stopped.\n* The default state is set as the active state\n** If it has a state_entry event, then it is queued.",
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
        "description": "Resets the script.\n\nOn script reset...\n* Full Object Update is sent to viewers.\n* The current event/function is exited without further execution or return.\n* Any granted URLs are released.\n* All global variables are set to their defaults.\n* Timers (including repeating sensors) are cleared.\n* Listeners are removed.\n* The event queue is cleared.\n* The default state is set as the active state.\n** If it has a state_entry event, then it is queued.",
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
        "description": "If the script is owned by an agent, PERMISSION_RETURN_OBJECTS may be granted by the owner.  If the script is owned by a group, this permission may be granted by an agent belonging to the group's \"Owners\" role.\n\nReturns an integer that is the number of objects successfully returned to their owners or an ERR_* flag.\n\nIf the return value is negative, it represents an error flag.",
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
        "description": "If the script is owned by an agent, PERMISSION_RETURN_OBJECTS may be granted by the owner.  If the script is owned by a group, this permission may be granted by an agent belonging to the group's \"Owners\" role.\n\nReturns an integer that is the number of objects successfully returned to their owners or an ERR_* flag.\n\nIf the return value is negative, it represents an error flag.",
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
        "description": "Instantiate inventory object rotated to rot with its root at position, moving at velocity, using param as the start parameter.\n\nTo rez an object so its center is at position (instead of the root) use llRezObject instead.",
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
        "description": "Instantiate inventory object at pos with velocity vel and rotation rot with start parameter param\n\nThe root of inventory is not at pos but the center of inventory is.\nTo have the root prim at pos use llRezAtRoot instead.",
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
        "name": "llRezObjectWithParams",
        "description": "Instantiate inventory object at pos with an initial set of parameters specified in params.\n\npos will default to the position of the object containing the script, unless REZ_POS is specified. (see below)Returns a key which will be the key of the object when it is successfully rezzed in the world.",
        "returnType": "key",
        "param": [
            {
                "name": "inventory",
                "description": "an object in the inventory of the prim this script is in",
                "type": "string"
            },
            {
                "name": "params",
                "description": "",
                "type": "list"
            }
        ]
    },
    {
        "name": "llRot2Angle",
        "description": "Returns a float that is the rotation angle represented by rot\n\nUse in conjunction with llRot2Axis.\nTo undo use llAxisAngle2Rot.",
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
        "description": "Returns a vector the rotation axis represented by rot\n\nUse in conjunction with llRot2Angle.\nTo undo use llAxisAngle2Rot or llAxes2Rot.",
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
        "description": "Sets the texture rotation of the chosen face to angle.\n\nIf face is ALL_SIDES then the function works on all sides.",
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
        "description": "Causes an object to smoothly rotate to target_direction with strength resistance at damping force.\n\nMaintains rotation target_direction until stopped with llStopLookAt.\n\nTo change the position in the same manner, use llMoveToTarget. For physical objects a range between .2 and 1 is good for both parameters.",
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
        "description": "This function is to have the script know when it has reached a rotation.\nIt registers a rot with a error that triggers at_rot_target and not_at_rot_target events continuously until unregistered.\n\nReturns a handle (an integer) to unregister the target with llRotTargetRemove\n\nA similar function exists for positions: llTarget\nThis function does not rotate the object, to do that use llSetRot, llRotLookAt or llLookAt.",
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
        "description": "Returns the integer that val is closest to.\n\nIf the absolute value of the tenths position is 4 or less, val is rounded off; otherwise, val is rounded towards positive infinity.",
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
        "description": "Returns a boolean (an integer) that is TRUE if uuid and the prim the script is in are of the same group, otherwise FALSE.\n\nThis function compares the of what uuid describes.\nIt answers these two questions:\n*\"Is the script's prim in the same group as uuid?\"\n*\"Is the of the script's prim equal to uuid?\"",
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
        "description": "Says the text supplied in string msg on channel supplied in integer channel. The message can be heard 20m away, usually (see caveats)",
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
        "description": "Attempts to resize the entire object by scaling_factor, maintaining the size-position ratios of the prims.\n\nResizing is subject to prim scale limits and linkability limits. This function can not resize the object if the linkset is physical, a pathfinding character, in a keyframed motion, or if resizing would cause the parcel to overflow.Returns an integer TRUE if it succeeds, FALSE if it fails.",
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
        "description": "Sets the texture u & v scales for the chosen face.\n\nIf face is ALL_SIDES then the function works on all sides.",
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
        "description": "Returns a boolean (an integer) that is TRUE if pos is over public land, sandbox land, land that doesn't allow everyone to edit and build, or land that doesn't allow outside scripts.\n\nThe usefulness of this function is limited as it does not give the reason why the script would be in danger. llGetParcelFlags on the other hand can be used in much the same way and gives more detailed information.",
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
        "description": "Performs a single scan for name and id with type within radius meters and arc radians of forward vector.\n\nScript execution continues immediately. When the scan is completed, a sensor or no_sensor event is put in the event queue.\n\nIf name and/or id are empty, they are ignored.\nIf id is an invalid key or NULL_KEY it is treated as empty.\nDepending upon which AGENT* flag is used determines the format requirements for name\n\nSee: llSensor for an excellent explanation of arc.",
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
        "description": "Removes the sensor setup by llSensorRepeat.\n\nThere are no parameters or return value for this function, as only one llSensorRepeat can be specified per script.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llSensorRepeat",
        "description": "Performs a scan for name and id with type within range meters and arc radians of forward vector and repeats every rate seconds. The first scan is not performed until rate seconds have passed.\n\nScript execution continues immediately. Whenever a scan is completed, a sensor or no_sensor event is put in the event queue.\n\nIf name, id, and/or type are empty or 0, they are ignored.\nIf id is an invalid key or NULL_KEY it is treated as empty.\nDepending upon which AGENT* flag is used determines the format requirements for name\n\nSee: llSensor for an excellent explanation of arc.",
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
        "description": "This function sets environment values for an individual agent in an experience. The changes to the environment persist until the agent moves to a new region or llSetAgentEnvironment is called for an agent with an empty list. Passing an empty list in params will strip all environmental settings applied to this agent as part of the experience",
        "returnType": "",
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
                "name": "params",
                "description": "A list of parameters to retrieve from the current environment.",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetAlpha",
        "description": "Sets the Blinn-Phong alpha on face\n\nIf face is ALL_SIDES then the function works on all sides.",
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
        "description": "Applies rotational velocity to object. It does the same job as llApplyRotationalImpulse but doesn't depend of the mass of object.",
        "returnType": "",
        "param": [
            {
                "name": "initial_omega",
                "description": "",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean, if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetAnimationOverride",
        "description": "Set the animation (anim) that will play for the given animation state (anim_state).\n\nTo run this function the script must request the PERMISSION_OVERRIDE_ANIMATIONS permission with llRequestPermissions.\nNote: Animation overrides survive everything, except relog.",
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
        "description": "Sets the buoyancy of the task or object. Requires physics to be enabled.\n\nA buoyancy value of 0.0 disables the effect\nwhen buoyancy is < 1.0, the object sinks\nwhen buoyancy equals 1.0 it floats\nwhen buoyancy is > 1.0 the object rises",
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
        "description": "Sets the point the camera is looking at to offset for avatars that sit on the object.\n\nThis is the point the camera looks at, not the position of the camera's eye.",
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
        "description": "Sets the camera eye offset for avatars that sit on the object.\n\nThis is the position of the camera's eye, not the point it looks at.",
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
        "description": "Sets multiple camera parameters at once.\n\nTo run this function the script must request the PERMISSION_CONTROL_CAMERA permission with llRequestPermissions.",
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
        "description": "Sets the action performed when a prim is clicked upon (aka click action).\n\nWhen the cursor hovers over the prim, its image changes to reflect the action.",
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
        "description": "Sets the Blinn-Phong color on face of the prim.\n\nIf face is ALL_SIDES then the function works on all sides.",
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
        "description": "Sets the Internet media type \"Content-Type\" header of any subsequent LSL HTTP server response via llHTTPResponse.",
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
                "description": "range: -100.0 (full heal) ~ 100.0 (instant kill)",
                "type": "float"
            }
        ]
    },
    {
        "name": "llSetEnvironment",
        "description": "This function overrides the environmental settings for a region or a parcel. The owner of the script must have permission to modify the environment on the parcel or be an estate manager to change the entire region.\n\nAn override for a given parameter can be set at the region scope or parcel scope. It can also be set for a single sky track, all sky tracks, or both. If an override of a given parameter is specified for both an individual track and all tracks, the individual track's override takes priority.\n\nNote that the list of valid parameters differs from those available for llGetEnvironment.",
        "returnType": "Integer",
        "param": [
            {
                "name": "position",
                "description": "The location on the region of the parcel to be changed. Use <-1, -1, z> for the entire region. The z-component specifies which sky track to change, based on elevation. Use z=-1 to set an override on the special 'all tracks' slot.",
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
        "description": "Applies force to the object (if the object is physical)\n\nContinuous force. llApplyImpulse has instantaneous push.",
        "returnType": "",
        "param": [
            {
                "name": "force",
                "description": "directional force",
                "type": "vector"
            },
            {
                "name": "local",
                "description": "boolean, if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
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
                "description": "boolean, if TRUE force is treated as a local directional vector, if FALSE force is treated as a region directional vector",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetHoverHeight",
        "description": "Critically damps to a height above the ground (or water) in tau seconds.\n\nDo not use with vehicles.\nUse llStopHover to stop hovering.",
        "returnType": "",
        "param": [
            {
                "name": "height",
                "description": "Distance to hover above the ground (if negative, hovers below ground)",
                "type": "float"
            },
            {
                "name": "water",
                "description": "boolean, if TRUE then hover above water too (or below if height is negative), if FALSE ignore water like it isn't there",
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
        "name": "llSetInventoryPermMask",
        "description": "Sets the given permission category to the new value on the inventory item.",
        "returnType": "",
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
            },
            {
                "name": "value",
                "description": "Permission bit field (PERM_* flags)",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetKeyframedMotion",
        "description": "Specify a list of positions, orientations, and timings to be followed by an object. The object will be smoothly moved between those keyframes by the simulator.\n\nCollisions with other nonphysical or keyframed objects will be ignored (no script events will fire and collision processing will not occur). Collisions with physical objects will be computed and reported, but the keyframed object will be unaffected by those collisions. (The physical object will be affected, however.)",
        "returnType": "",
        "param": [
            {
                "name": "keyframes",
                "description": "Strided keyframe list of the form:\n* ''vector'' position (optional via KFM_TRANSLATION and KFM_DATA)\n* ''rotation'' orientation (optional via KFM_ROTATION and KFM_DATA)\n* ''float'' time\n\nEach keyframe is interpreted relative to the previous transform of the object. Time values must be 1/9s. or greater. For example, consider the following list of keyframes:\n [<0, 0, 10>, ZERO_ROTATION, 5, <0, 0, 0>, ZERO_ROTATION, 5, <0, 0, -10>, ZERO_ROTATION, 5]\nThis would cause the object to move up 10m over the course of 5s. It would then remain at the location for 5s before moving down 10m over the course of another 5s.\n\nAn empty list will terminate any keyframed animation currently playing.",
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
        "description": "If a prim exists in the link set at link, set the Blinn-Phong alpha on face of that prim.\n\nIf face is ALL_SIDES then the function works on all sides.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "description": "If a prim exists in the link set at link, set the Blinn-Phong color on face of that prim.\n\nIf face is ALL_SIDES then the function works on all sides.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "name": "llSetLinkPrimitiveParams",
        "description": "Sets the prims parameters according to rules.\n\nThese are very powerful & sharp functions. Each PRIM_* rule takes at least one parameter and has its own quirks and its own dedicated article with specific information.\n\nPlease consider using llSetLinkPrimitiveParamsFast instead. You avoid the 0.2 second delay.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "description": "Sets the prim's parameters according to rules.\n\nThese are very powerful & sharp functions. Each PRIM_* rule takes at least one parameter and has its own quirks and its own dedicated article with specific information.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "name": "llSetLinkRenderMaterial",
        "description": "If a prim exists in the link set at link, set material on face of that prim. This function will clear most PRIM_GLTF_* properties on the face, with the exceptions of repeats, offsets, and rotation_in_radians\n\nIf face is ALL_SIDES then the function works on all sides.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
                "type": "integer"
            },
            {
                "name": "material",
                "description": "a material in the inventory of the prim this script is in or a UUID of a material",
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
        "name": "llSetLinkSitFlags",
        "description": "Sets flags on the link's sittarget.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag The link ID",
                "type": "integer"
            },
            {
                "name": "flags",
                "description": "Flags to set",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetLinkTexture",
        "description": "If a prim exists in the link set at link, set Blinn-Phong diffuse texture on face of that prim.\n\nIf face is ALL_SIDES then the function works on all sides.",
        "returnType": "",
        "param": [
            {
                "name": "link",
                "description": "Link number (0: unlinked, 1: root prim, >1: child prims and seated avatars) or a LINK_* flag",
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
        "description": "Animate the texture on the specified face/faces of the specified prim/prims by setting the texture scale and offset.\n\nIdentical to llSetTextureAnim except able to modify any prim in the link set.\n\nIf face is ALL_SIDES then the function works on all sides.\nstart supports negative indexes.\nFrames are numbered from left to right, top to bottom, starting at 0.\nIf rate is negative, it has the same effect as using the REVERSE flag.\nIf length is 0, it is considered to be sizex*sizey if both are above 0, otherwise 1.",
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
        "description": "Sets the prim's name according to the name parameter.\n\nIf this function is called from a child prim in a linked set, it will change the name of the child prim and not the root prim.",
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
        "name": "llSetObjectPermMask",
        "description": "Sets the given permission mask to the new value on the root object the task is attached to.",
        "returnType": "",
        "param": [
            {
                "name": "mask",
                "description": "MASK_* flag",
                "type": "integer"
            },
            {
                "name": "value",
                "description": "bit-field, PERM_* flags",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetParcelMusicURL",
        "description": "Sets the streaming audio URL for the parcel object is on\n\nThe object owner must also be the land owner. If the land is deeded to a group the object will need to be deeded to the same group for this function to work.",
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
                "description": "PAY_* constant or positive value (including zero)",
                "type": "integer"
            },
            {
                "name": "quick_pay_buttons",
                "description": "Four PAY_* constants and/or positive integer values (zero is not shown)",
                "type": "list"
            }
        ]
    },
    {
        "name": "llSetPhysicsMaterial",
        "description": "Used to set the physical characteristics of an object.\n\nThe default values for friction and restitution depend upon the material type.",
        "returnType": "",
        "param": [
            {
                "name": "mask",
                "description": "bitwise combination of DENSITY, FRICTION, RESTITUTION, and GRAVITY_MULTIPLIER and specifies which floats to actually apply",
                "type": "integer"
            },
            {
                "name": "gravity_multiplier",
                "description": "range [-1.0, +28.0], default: 1.0",
                "type": "float"
            },
            {
                "name": "restitution",
                "description": "range [0.0, 1.0], default: [0.3, 0.9]",
                "type": "float"
            },
            {
                "name": "friction",
                "description": "range [0.0, 255.0], default: [0.2, 0.9]",
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
        "description": "Moves the object or primitive towards pos without using physics.\n\nMovement is capped to 10m per call for unattached root prims.",
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
        "description": "Sets the prim's parameters according to rules.\n\nThese are very powerful & sharp functions. Each PRIM_* rule takes at least one parameter and has its own quirks and its own dedicated article with specific information.\n\nPlease consider using llSetLinkPrimitiveParamsFast in combination with LINK_THIS instead. You avoid the 0.2 second delay.",
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
        "name": "llSetPrimMediaParams",
        "description": "Set the media params for a particular face.\n\nReturns a status (an integer) that is a STATUS_* flag which details the success/failure of the operation(s).",
        "returnType": "integer",
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
        "name": "llSetPrimURL",
        "description": "Updates the URL for the web page shown on the sides of the object.",
        "returnType": "",
        "param": [
            {
                "name": "url",
                "description": "",
                "type": "string"
            }
        ],
        "flags": ["deprecated"]
    },
    {
        "name": "llSetRegionPos",
        "description": "Tries to move the entire object so that the root prim is within 0.1m of position.\n\nReturns an integer boolean, TRUE if the object is successfully placed within 0.1 m of position, FALSE otherwise. See #Specification for details.\n\nOnly if TRUE is returned does the object move, if FALSE is returned, the object does not change position.",
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
        "name": "llSetRenderMaterial",
        "description": "Sets the material of this prim's face. This function will clear most PRIM_GLTF_* properties on the face, with the exceptions of repeats, offsets, and rotation_in_radians.\n\nIf face is ALL_SIDES then the function works on all sides.",
        "returnType": "",
        "param": [
            {
                "name": "material",
                "description": "a material in the inventory of the prim this script is in or a UUID of a material",
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
        "description": "Sets the size of the prim according to size\n\nThe components of size (x, y & z) each need to be in the range [0.01, 64.0], if they are out of the range they are rounded to the nearest endpoint.",
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
                "description": "boolean, if TRUE[1] the script will be enabled, if FALSE the script will be disabled",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetSitText",
        "description": "Displays text rather than the default \"Sit Here\" in the right-click menu.",
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
        "name": "llSetSoundQueueing",
        "description": "Set whether attached sounds wait for the current sound to finish. If queue is TRUE, queuing is enabled, if FALSE queuing is disabled. Sound queuing is disabled by default.",
        "returnType": "",
        "param": [
            {
                "name": "queue",
                "description": "boolean, sound queuing: TRUE enables, FALSE (default) disables",
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
                "description": "boolean, TRUE enables, FALSE disables",
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
        "description": "Sets the Blinn-Phong diffuse texture of this prim's face.\n\nIf face is ALL_SIDES then the function works on all sides.",
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
        "description": "Animate the texture on the specified face/faces by setting the texture scale and offset.\n\nIf face is ALL_SIDES then the function works on all sides.\nstart supports negative indexes.\nFrames are numbered from left to right, top to bottom, starting at 0.\nIf rate is negative, it has the same effect as using the REVERSE flag.\nIf length is 0, it is considered to be sizex*sizey if both are above 0, otherwise 1.",
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
                "description": "boolean, if TRUE uses the local axis, if FALSE uses the region region axis",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSetTouchText",
        "description": "Displays text rather than the default \"Touch\" in the right-click menu\n\nThis is very similar to LlSetSitText.\nTo restore the default value, use an empty string for text.\nTo make it appear as if there is no text, use some combination of whitespace characters for text.",
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
        "description": "Applies velocity to object\n\nInstantaneous velocity not dependent on object energy or mass.",
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
        "description": "Returns a string of 40 hex characters that is the SHA-1 security hash of src.",
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
        "description": "Returns a string of 64 hex characters that is the SHA-256 security hash of src.",
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
        "description": "Returns a string that is the Base64-encoded RSA signature of msg when using hash algorithm algorithm and secret key private_key. Can be paired with llVerifyRSA to pass verifiable messages.\n\nThis function supports sha1, sha224, sha256, sha384, sha512 for algorithm.",
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
        "description": "The avatar specified by agent_id is forced to sit on the sit target of the prim indicated by the link parameter. If the specified link is already occupied, the simulator searches down the chain of prims in the link set looking for an available sit target.\n\nIf successful, this method returns 1.\n\nIf the function fails, it returns a negative number constant.\n\nLink constants that indicate a single prim may be used for the link parameter. These are LINK_ROOT and LINK_THIS. Other constants such as LINK_SET, LINK_CHILDREN, LINK_ALL_OTHERS will return an INVALID_LINK error.\n\nThis method must be called from an experience enabled script running on land that has enabled the experience key. If these conditions are not met this method returns a NOT_EXPERIENCE error.\n\nThe targeted avatar must also have accepted the experience. If the user is not participating in the experience this method returns NO_EXPERIENCE_PERMISSION. If the avatar id can not be found or is not over land that has enabled the experience this method returns INVALID_AGENT.\n\nIf there are no valid sit targets remaining in the linkset this method returns NO_SIT_TARGET and no action is taken with the avatar.\n\nIf the avatar does not have access to the parcel containing the prim running this script, this call fails.",
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
        "description": "Set the sit location for the prim. The sit location is relative to the prim's position and rotation.\n\nIf offset == <0.0, 0.0, 0.0> then the sit target is removed.",
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
        "description": "Puts the script to sleep for sec seconds. The script will not do anything during this time.\n\nThe script will sleep at least until the next server-frame, which happen every (1/45 = ~0.02222) seconds under normal conditions.\n\nIf sec is zero or less, the script will not sleep at all.",
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
        "name": "llSound",
        "description": "Plays sound at volume and whether it should loop or not.",
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
                "name": "queue",
                "description": "boolean, whether or not to queue the song (TRUE) or interrupt the playing song (FALSE).",
                "type": "integer"
            },
            {
                "name": "loop",
                "description": "boolean, whether or not to loop the song.",
                "type": "integer"
            }
        ]
    },
    {
        "name": "llSoundPreload",
        "description": "Preloads sound on viewers within range.",
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
        "name": "llSqrt",
        "description": "Returns a float that is the square root of val.\n\nFor imaginary results (val < 0.0), a Math Error is triggered under LSO, or 'NaN' (Not A Number) is returned under Mono",
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
        "description": "Start animation anim for agent that granted PERMISSION_TRIGGER_ANIMATION if the permission has not been revoked.\n\nTo run this function the script must request the PERMISSION_TRIGGER_ANIMATION permission with llRequestPermissions.",
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
                "description": "name of an animation in the inventory of the current object",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStopAnimation",
        "description": "Stop animation anim for agent that granted PERMISSION_TRIGGER_ANIMATION if the permission has not been revoked.\n\nTo run this function the script must request the PERMISSION_TRIGGER_ANIMATION permission with llRequestPermissions.",
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
        "name": "llStopHover",
        "description": "Stop hovering to a height",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStopLookAt",
        "description": "Stop causing object to point at a target\n\nUse in conjunction llLookAt or llRotLookAt.",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStopMoveToTarget",
        "description": "Stops critically damped motion\n\nUse in conjunction with llMoveToTarget\nTo stop rotation movement use llStopLookAt",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStopObjectAnimation",
        "description": "Stop an animation for the current object.",
        "returnType": "",
        "param": [
            {
                "name": "anim",
                "description": "name of an animation in the inventory of the current object, or an animation uuid",
                "type": "string"
            }
        ]
    },
    {
        "name": "llStopPointAt",
        "description": "Stop agent that owns object pointing",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStopSound",
        "description": "Stops the attached sound(s) currently playing, if they were started by llLoopSound",
        "returnType": "",
        "param": []
    },
    {
        "name": "llStringLength",
        "description": "Returns an integer that is the number of characters in str.",
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
        "description": "Returns the string Base64 representation of the str interpreted as an UTF-8 byte sequence\n\nIf extra bits are needed to complete the last base64 symbol, those extra bits will be zero.\nTo go in the other direction, use llBase64ToString.",
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
        "description": "Returns an integer that is the index of the first instance of pattern in source.\n\nIf pattern is not found in source, -1 is returned.\nThe index of the first character in the string is 0",
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
        "name": "llTakeCamera",
        "description": "This function is recognized by the compiler, but was never implemented in Second Life.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
                "type": "key"
            }
        ]
    },
    {
        "name": "llTakeControls",
        "description": "Allows for intercepting of keyboard and mouse clicks, specifically those specified by controls, from the agent the script has permissions for.\n\nTo run this function the script must request the PERMISSION_TAKE_CONTROLS permission with llRequestPermissions.\nIf accept is FALSE and pass_on is FALSE, the behavior is not intuitive. In this case, the complement of the specified controls do not generate events and do not perform their normal functions. They are effectively disabled. Certain control bits (e.g. CONTROL_ROT_LEFT) are also disabled when specified, in this case.\nIf accept is FALSE and pass_on is TRUE, then the specified controls do not generate events but perform their normal functions.\nIf accept is TRUE and pass_on is FALSE, then the specified controls generate events but do not perform their normal functions.\nIf accept is TRUE and pass_on is TRUE, then the specified controls generate events and perform their normal functions.",
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
        "description": "This function is to have the script know when it has reached a position.\nIt registers a position with a range that triggers at_target and not_at_target events continuously until unregistered.\n\nReturns a handle (an integer) to unregister the target with llTargetRemove.\n\nA similar function exists for rotations: llRotTarget\nThis function does not move the object, to do that use llSetPos or llMoveToTarget.",
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
        "description": "Sends an email to the owner (selected by target) of an object with subject and message.\n\nThe entire message (including the address, subject and other miscellaneous fields) can't be longer than 4096 bytes combined.",
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
        "description": "Teleports an agent to a landmark stored in the object's inventory.\n\nIf landmark is an empty string, the avatar is teleported to the location position in the current region.\n\nIf the destination is in the current region, the avatar will land facing look_at as a position within that region. Otherwise, look_at is treated as a unit direction.\n\nTo run this function the script must request the PERMISSION_TELEPORT permission with llRequestPermissions and it must be granted by agent.",
        "returnType": "",
        "param": [
            {
                "name": "agent",
                "description": "avatar UUID that is in the same region (the avatar to teleport, must be the owner)",
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
        "description": "Teleports an agent to region_coordinates within a region specified by global_coordinates.\n\nA region's global coordinates can be retrieved using llRequestSimulatorData(\"region name\", DATA_SIM_POS)\n\nIf the destination is in the current region, the avatar will land facing look_at as a position within that region. Otherwise, look_at is treated as a unit direction.\n\nTo run this function the script must request the PERMISSION_TELEPORT permission with llRequestPermissions and it must be granted by agent.\n\nThe combination of llRequestSimulatorData and llTeleportAgentGlobalCoords allows agents to be teleported to regions by region name.",
        "returnType": "",
        "param": [
            {
                "name": "agent",
                "description": "avatar UUID that is in the same region (the avatar to teleport, must be the owner)",
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
        "description": "Teleports avatar on owner's land to their home location without any warning, similar to a God Summons or dying.\n\nGenerally, the object owner must also be the land owner but there is an exception for land deeded to a group for group members with the \"Eject and freeze Residents on parcels\" ability. See #Ownership Limitations for details.",
        "returnType": "",
        "param": [
            {
                "name": "avatar",
                "description": "avatar UUID that is in the same region",
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
                "description": "avatar UUID that is in the same region",
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
        "description": "Returns a string that is src with all lower-case letters\n\nThe opposite is llToUpper.",
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
        "description": "Returns a string that is src with all upper-case characters.\n\nThe opposite is llToLower.",
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
        "description": "Transfer amount of L$ money from script owner to destination avatar.\n\nReturns a key used in a matching transaction_result event for the success or failure of the transfer. If the transaction is successful, this key will show in the transaction history.\n\nIf you aren't going to use the return value or the resulting transaction_result event consider using llGiveMoney instead of this function.",
        "returnType": "key",
        "param": [
            {
                "name": "destination",
                "description": "avatar UUID",
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
        "description": "Plays sound at volume, centered at but not attached to object.\n\nIf the object moves the sound does not move with it.\nUse llPlaySound to play a sound attached to the object.",
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
        "description": "Plays sound at volume, centered at but not attached to the object, limited to the box defined by vectors top_north_east and bottom_south_west\n\nIf the object moves the sound does not move with it.\nUse llPlaySound to play a sound attached to the object.",
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
        "description": "Returns a string that is an unescaped/unencoded version of url, replacing \"%20\" with spaces etc.\n\nThis function is similar to functions (e.g. urldecode, decodeURIComponent) found in many other languages",
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
        "description": "The agent identified by id is forced to stand up if any of the following apply:\n# The agent is sitting on the scripted object\n# The agent is over land owned by the scripted object's owner and/or a group the owner has land rights for.",
        "returnType": "",
        "param": [
            {
                "name": "id",
                "description": "avatar UUID that is in the same region",
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
        "description": "Start an asynchronous transaction to update a key-value pair associated with the script's Experience with the given key (k) and value (v).\n\nReturns a handle (a key) that can be used to identify the corresponding dataserver event to determine if this command succeeded or failed and the results.\n\nIf checked is set to TRUE then the update will only happen if original_value matches the current value in key-value store, otherwise the dataserver will return a failure along with the error XP_ERROR_RETRY_UPDATE. This can be used to create an in-use flag so that Atomicity can be achieved.\n\nAs of Jan 1, 2016 maximum bytes is 1011 for key and 4095 for value for both LSO and Mono scripts.\nUsing llUpdateKeyValue to update a key that does not exist will not generate XP_ERROR_KEY_NOT_FOUND. Instead, it will generate a new key with the specified value, as if you had used llCreateKeyValue.\n\nFor this function to work, the script must be compiled into an Experience.",
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
        "description": "Returns the vector that is vec normalized (a unit vector sharing the same direction as vec).\n\nIf vec is a ZERO_VECTOR, than the value returned is a ZERO_VECTOR.",
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
        "description": "Returns an integer indicating whether the RSA signature is valid for msg when using hash algorithm algorithm and public RSA key public_key.  Returns TRUE if the signature is verified, and FALSE otherwise.  Can be paired with llSignRSA to validate the authenticity of messages from other LSL scripts.\n\nThis function supports sha1, sha224, sha256, sha384, sha512 for algorithm.",
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
        "description": "If detect is TRUE, VolumeDetect is enabled, physical object and avatars can pass through the object.\n\nThis works much like Phantom, but unlike Phantom, VolumeDetect objects trigger collision_start and collision_end events when interpenetrating. Collision events will trigger in any script in the object.",
        "returnType": "",
        "param": [
            {
                "name": "detect",
                "description": "TRUE enables, FALSE (default) disables",
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
        "description": "Returns a float that is the water height below the prim's position + offset\n\nThe requested position needs to be in the same region.\nOnly the x and y coordinates in offset are important, the z component is ignored.\nWater height is constant across each entire sim and is typically 20 meters but not always.",
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
        "description": "Returns a vector that is the wind velocity at the prim's position + offset\n\nThe requested position needs to be in the same region.\nOnly the x and y coordinates in offset are important, the z component is ignored.",
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
        "name": "llWorldPosToHUD",
        "description": "Returns a vector position in HUD frame that would place the center of the HUD object directly over world_pos as viewed by the current camera.\n\nTo run this function the script must request the PERMISSION_TRACK_CAMERA permission with llRequestPermissions.",
        "returnType": "vector",
        "param": [
            {
                "name": "world_pos",
                "description": "",
                "type": "vector"
            }
        ]
    },
    {
        "name": "llXorBase64",
        "description": "Correctly performs an exclusive or on two Base64 strings.\n\nReturns a string that is a Base64 XOR of str1 and str2.\n\nstr2 repeats if it is shorter than str1. If the inputs are not Base64 strings the result will be erratic.\nBe sure to read the Cryptography section before designing a cryptographic algorithm.",
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
    },
    {
        "name": "llXorBase64Strings",
        "description": "Returns a string that is a Base64 string of s1 xor'ed with s2.\n\ns2 repeats if it is shorter than s1. Retained for backwards compatibility.",
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
    },
    {
        "name": "llXorBase64StringsCorrect",
        "description": "Correctly performs an exclusive or on two Base 64 strings.Returns a string that is a Base64 XOR of str1 and str2.\n\nstr2 repeats if it is shorter than str1. If the inputs are not Base64 strings the result will be erratic.",
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