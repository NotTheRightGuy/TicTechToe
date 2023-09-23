import random
import numpy as np
from deep_speaker.audio import read_mfcc
from deep_speaker.batcher import sample_from_mfcc
from deep_speaker.constants import SAMPLE_RATE, NUM_FRAMES
from deep_speaker.conv_models import DeepSpeakerModel
from deep_speaker.test import batch_cosine_similarity

np.random.seed(123)
random.seed(123)


def compare_embeddings(person1, person1Other, person2):
    model = DeepSpeakerModel()
    model.m.load_weights(
        'ResCNN_triplet_training_checkpoint_265.h5', by_name=True)
    mfcc_001 = sample_from_mfcc(read_mfcc(
        person1, SAMPLE_RATE), NUM_FRAMES)
    mfcc_002 = sample_from_mfcc(read_mfcc(
        person1Other, SAMPLE_RATE), NUM_FRAMES)
    mfcc_003 = sample_from_mfcc(
        read_mfcc(person2, SAMPLE_RATE), NUM_FRAMES)
    # Call the model to get the embeddings of shape (1, 512) for each file.
    predict_001 = model.m.predict(np.expand_dims(mfcc_001, axis=0))
    predict_002 = model.m.predict(np.expand_dims(mfcc_002, axis=0))
    predict_003 = model.m.predict(np.expand_dims(mfcc_003, axis=0))
    # Do it again with a different speaker.
    # Compute the cosine similarity and check that it is higher for the same speaker.
    same_speaker_similarity = batch_cosine_similarity(predict_001, predict_002)
    diff_speaker_similarity = batch_cosine_similarity(predict_001, predict_003)
    ob = {
        'same_speaker_similarity': same_speaker_similarity,
        'diff_speaker_similarity': diff_speaker_similarity
    }
    return ob
