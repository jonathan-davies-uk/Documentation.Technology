---
sidebar_position: 6
---

# VM locked by another task

## The Issue

`VM is locked by another task`

The VM could be locked by a snapshot or a restore.

## The Resolution

1. Check vSphere to see if there's a Veeam snapshot open against the server in question.
2. Check other peoples connections to the server, they may have left a restore open overnight.
3. This may also by a replication job that has locked the task - so look out for them too.
4. Try migrating the failing VM onto a different host