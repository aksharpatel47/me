#!/bin/bash

yarn build
tar -cvzf public.tar.gz ./public
scp -i ~/.ssh/server public.tar.gz akshar@104.225.222.82:~/me
ssh -i ~/.ssh/server akshar@104.225.222.82 "(cd me && tar -xvzf public.tar.gz)"
rm public.tar.gz