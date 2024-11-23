Initially, the idea was to have videos integrated side-by-side with recipes or include links directly in the recipe return. However, the current implementation introduces a dedicated Tutorials Page, allowing better user interaction and functionality.

Design Rationale:
Keeps recipes and tutorials independent for a cleaner UI.
Centralizes video-related functionality, making it easier to manage playlists and saved videos.

Key Sections:
Search Bar: Integrated YouTube search functionality for finding recipe-related tutorials.
Video Player: A YouTube player for watching selected tutorials.
Saved Videos: A list of user-saved tutorials for quick access.
Playlists: User-created collections of videos for better organization.

Used MVC approach similar to that in API 1. (thanks Simon and Ameer).

Intended Design:
Navbar
Search Bar
The video player
Saved Videos
Footer

Features:
Search YouTube Videos: Search cooking tutorials using searchbar.
Video Player: Embedded YouTube player to watch selected videos.
Saved Videos: Save videos for quick future access. Display saved videos in a sortable list. (as links with name)

Functionality:
Once we search. well get videos displayed with buttons save and add to playlist below.

Further:
- Save video and add to playlist are similar, so I think we can group together saved vidoes as "playlist"
- right now once saved they cant be un saved.
for these 2 should we have a spearate page for saved vidoes?