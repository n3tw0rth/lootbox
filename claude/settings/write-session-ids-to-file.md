This will write the session id to `.claude-sessions` on your current working directory. this is helpful when 
- you accidenly powered off the device and later you want the last session
- there can be more reasons


**Script** - `~/.claude/hooks/log-session.sh`:
```bash
#!/usr/bin/env bash
input=$(cat)
sid=$(printf '%s' "$input" | jq -r '.session_id')
dir=$(printf '%s' "$input" | jq -r '.cwd')
printf '%s %s\n' "$(date '+%Y-%m-%d %H:%M')" "$sid" >> "$dir/.claude/.claude-sessions"
```

```bash
chmod +x ~/.claude/hooks/log-session.sh
```

**Config** - `~/.claude/settings.json`:
```json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "bash \"$HOME/.claude/hooks/log-session.sh\""
          }
        ]
      }
    ]
  }
}
```

How it works:
- `~/.claude/settings.json` = global. Loads for all projects. No per-directory setup.
- Script writes to `cwd` from stdin JSON. Lands in whatever dir you launched from. Fresh dir → new `.claude-sessions` there automatically.
- Script lives in home, not project. Nothing to recreate.

Set once. Done.

Tip: add `.claude-sessions` to global gitignore so it never gets committed:
```bash
echo '.claude-sessions' >> ~/.config/git/ignore
```
