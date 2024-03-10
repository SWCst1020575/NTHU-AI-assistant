FROM nvidia/cuda:12.1.0-devel-ubuntu22.04

COPY ./requirements.txt /
COPY ./*.py /
COPY ./model /model

# Use nchc mirror
RUN apt-get install ca-certificates -y
RUN sed -i 's/htt[p|ps]:\/\/archive.ubuntu.com\/ubuntu\//http:\/\/free.nchc.org.tw\/ubuntu/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y python3 python3-pip
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

# Environment variable
ENV PATH="/usr/local/cuda/bin:${PATH}"
ENV LD_LIBRARY_PATH="/usr/local/cuda/lib64:$LD_LIBRARY_PATH"
ARG PYTORCH="2.0.1"
ARG CUDA="121"

RUN pip install --no-cache-dir -r /requirements.txt

CMD ["python3", "openai_api_server.py","--base_model","hfl/chinese-alpaca-2-7b","--lora_model","/model/sft_lora_model/","--load_in_8bit"]
