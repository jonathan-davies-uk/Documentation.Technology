---
sidebar_position: 9
---

# Temporary Files

## The Issue

`There's a temp file in the backup location.`

This is a possible bug in Veeam - only seen it once. This has caused backups to fail before.

## The Resolution

Delete the temporary file and make sure it has deleted properly. If it does not delete, reboot the machine and then delete.