from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

# String key
key = "GREEN"

# Get enum member
enum_member = Color[key]
print(enum_member)       # Color.GREEN
print(enum_member.value) # 2