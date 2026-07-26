sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note over browser,server: Payload: { "content": "I wrote a new note", "date": "2026-07-25" }
    server-->>browser: HTTP status code 201 Created
    deactivate server

    Note right of browser: Interface updated by JS, no redirect
    