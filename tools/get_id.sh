#!/bin/bash
if [[ -f $1 ]]
then
    2>/dev/null openssl rsa -in $1 -pubout -outform DER | sha256sum | head -c32 | tr 0-9a-f a-p
fi
