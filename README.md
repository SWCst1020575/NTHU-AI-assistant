# NTHU AI assistant
* Based on [Chinese Llama 2](https://github.com/ymcui/Chinese-LLaMA-Alpaca-2) model, and use [LoRA](https://github.com/microsoft/LoRA) to fine-tune.
* Set up LLM model and use API to allow web  access it, performing the assistant in GUI app.
* Use [bitsandbytes](https://github.com/TimDettmers/bitsandbytes) to enable 8-bit mode, which can reduce the VRAM usage.
* This repo clone from [langui](https://github.com/ahmadbilaldev/langui) to build chat ui.

## Run LLM model with docker
```sh
docker run --gpus all --mount type=bind,source=~/.cache/huggingface,target=/root/.cache/huggingface -p 8888:19327 swcst1020575/nthu-assistant:cuda121-ubuntu22.04-8bit
```
* Replace source path with absolute cache path to save huggingface pretrained model.
* Please ensure cuda were installed.
* [Docker repo](https://hub.docker.com/r/swcst1020575/nthu-assistant)
* [Reference pretrained model](https://github.com/ymcui/Chinese-LLaMA-Alpaca-2)

## Access with API
```sh
curl http://localhost:8888/v1/completions -H "Content-Type: application/json" -d '{"prompt": "校長"}'
```
## Demo
[![](https://i9.ytimg.com/vi_webp/I55WNYqRtDc/mq1.webp?sqp=CLiUuK8G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDEgLCh_MA8=&rs=AOn4CLAhi0uxOFbkgI78nAZQfshbQBs3aw)](https://youtu.be/I55WNYqRtDc)